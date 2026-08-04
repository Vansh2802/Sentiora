import { describe, expect, it } from "vitest";

import { extensionHeadline } from "./App";

describe("Extension popup", () => {
  it("exports the scaffold heading", () => {
    expect(extensionHeadline).toBe("Sentiora extension foundation");
  });
});
