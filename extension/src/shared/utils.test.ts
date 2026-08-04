import { describe, expect, it } from "vitest";

import { createStatusMessage } from "./utils";

describe("extension shared utilities", () => {
  it("builds a scaffold status message", () => {
    expect(createStatusMessage("Sentiora")).toBe("Sentiora extension scaffold loaded.");
  });
});
