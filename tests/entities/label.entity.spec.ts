import { Label } from "../../src/entities/label.entity";

describe("Label Entity", () => {
   let label: Label;

   beforeEach(() => {
      label = new Label("Test Label");
   });

   it("should create a label with a name", () => {
      expect(label.getName()).toBe("Test Label");
      expect(label.getColor()).toBe("");
   });

   it("should set and get color", () => {
      const color = "blue";
      label.setColor(color);
      expect(label.getColor()).toBe(color);
   });

   it("should set and get name", () => {
      const newName = "Updated Label";
      label.setName(newName);
      expect(label.getName()).toBe(newName);
   });

   it("should return the ID", () => {
      const id = label.getId();
      expect(id).toBeDefined();
      expect(typeof id).toBe("string");
   });
});
