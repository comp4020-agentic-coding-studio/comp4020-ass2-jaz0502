import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("course spec", () => {
  it("keeps the SLOP code's assigned three digits", () => {
    expect(api.course.code).toMatch(/^SLOP[1234689]605$/);
  });

  it("runs a session in every one of the twelve teaching weeks", () => {
    const weeks = nodesOfType("sessions")
      .map((node) => node.meta?.week)
      .sort((a, b) => (a as number) - (b as number));
    expect(weeks).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
  });

  it("adds assessment weights up to 100%", () => {
    const total = nodesOfType("assessments").reduce(
      (sum, node) => sum + (node.meta?.weight as number),
      0,
    );
    expect(total).toBe(100);
  });

  it("links at least one lecture to a deck that actually builds", () => {
    const decked = nodesOfType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(decked.length, "no lecture has a `slides` link").toBeGreaterThan(0);
    for (const node of decked) {
      const slidesPath = node.meta?.slides as string;
      const deckFile = resolve(`dist${slidesPath}index.html`);
      expect(existsSync(deckFile), `${node.id} links ${slidesPath} but it didn't build`).toBe(true);
    }
  });
});
