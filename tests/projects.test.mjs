import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { projects, getProjectBySlug } from "../lib/projects.ts";

test("project lookup rejects unknown slugs and inherited object properties", () => {
  for (const slug of ["missing", "toString", "constructor", "__proto__", "", "../about"]) {
    assert.equal(getProjectBySlug(slug), undefined, slug);
  }
  for (const project of projects) {
    assert.equal(getProjectBySlug(project.slug), project);
  }
});

test("published projects have unique routes, real screenshots, and valid links", () => {
  assert.equal(new Set(projects.map((project) => project.slug)).size, projects.length);
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(project.images.length > 0, project.slug + " needs a cover");
    for (const image of project.images) {
      assert.ok(image.alt.length > 20, image.src + " needs a descriptive caption");
      assert.ok(existsSync(new URL("../public" + image.src, import.meta.url)), image.src);
    }
    for (const href of [project.github, project.liveDemo].filter(Boolean)) {
      assert.equal(new URL(href).protocol, "https:");
    }
  }
});

test("the resume and advertised share image exist", () => {
  for (const asset of ["raagas-julius-caesar-resume.pdf", "og-image.png", "icon.svg", "apple-icon.png"]) {
    assert.ok(existsSync(new URL("../public/" + asset, import.meta.url)), asset);
  }
});
