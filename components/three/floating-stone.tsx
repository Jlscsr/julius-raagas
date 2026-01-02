"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function FloatingStone() {
  const meshRef = useRef<THREE.Mesh>(null)

  // Simplified geometry for more minimal aesthetic
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 2)
    const positions = geo.attributes.position
    const vertex = new THREE.Vector3()

    // Subtle organic deformation
    for (let i = 0; i < positions.count; i++) {
      vertex.fromBufferAttribute(positions, i)

      // Minimal noise-based displacement
      const noise = Math.sin(vertex.x * 2) * Math.cos(vertex.y * 2) * Math.sin(vertex.z * 2)
      const displacement = 0.08 + noise * 0.06

      vertex.normalize().multiplyScalar(1 + displacement * Math.random())
      positions.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }

    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      // Even slower, more minimal rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.08

      // Reduced floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={[1.5, 0, 0]}>
      {/* Updated color to muted blue-grey */}
      <meshStandardMaterial color="#6b9dc4" roughness={0.9} metalness={0.02} flatShading />
    </mesh>
  )
}
