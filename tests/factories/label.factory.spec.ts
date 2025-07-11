import { LabelFactory } from "../../src/factories/label.factory";

describe("Label factory", () => {
   it("should create a valid label entity", () => {
      const label = new LabelFactory().create("Test Label");
      expect(label).toBeDefined();
      expect(label.getName()).toBe("Test Label");
   });

   it("should create a label with a specific ID", () => {
      const label = new LabelFactory().createWithId(
         "custom-id-123",
         "Test Label",
      );
      expect(label).toBeDefined();
      expect(label.getId()).toBe("custom-id-123");
      expect(label.getName()).toBe("Test Label");
   });
});
