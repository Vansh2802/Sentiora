import { describe, expect, it } from "vitest";

import { foundationHeading } from "../App";

describe("App scaffold", () => {
  it("exports the foundation heading", () => {
    expect(foundationHeading).toBe("Sentiora frontend foundation is ready.");
  });
});
