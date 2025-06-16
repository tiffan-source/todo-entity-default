import { LabelFactory } from "../../src/factories/label.factory";

describe("Label factory", () => {
   it("should create a valid label entity", () => {
      const label = new LabelFactory().create("Test Label");
      expect(label).toBeDefined();
      expect(label.getName()).toBe("Test Label");
   });
});
