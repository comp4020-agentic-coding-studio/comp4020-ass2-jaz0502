import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  tags?: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

const incentiveNodes = api.nodes.filter(
  (node) =>
    (node.type === "sessions" || node.type === "lectures") &&
    (node.tags ?? []).includes("incentive"),
);

const FORTNIGHTS = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
  [11, 12],
];

describe("incentive check", () => {
  it("asks the incentive question at least ten times across the semester", () => {
    expect(incentiveNodes.length).toBeGreaterThanOrEqual(10);
  });

  it("asks it at least once every fortnight", () => {
    for (const [start, end] of FORTNIGHTS) {
      const inRange = incentiveNodes.some((node) => {
        const week = node.meta?.week as number | undefined;
        return week !== undefined && week >= start && week <= end;
      });
      expect(inRange, `no incentive-tagged node in weeks ${start}-${end}`).toBe(true);
    }
  });
});
