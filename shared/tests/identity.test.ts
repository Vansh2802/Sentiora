import { describe, expect, it } from "vitest";

import { APP_NAME, APP_VERSION, identity } from "../src/index.js";

describe("shared package placeholders", () => {
  it("exports canonical app metadata", () => {
    expect(APP_NAME).toBe("Sentiora");
    expect(APP_VERSION).toBe("0.1.0");
  });

  it("returns values unchanged", () => {
    expect(identity({ name: APP_NAME })).toEqual({ name: APP_NAME });
  });
});
