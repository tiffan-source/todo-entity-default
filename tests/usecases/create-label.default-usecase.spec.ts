import { CreateLabelDefaultUsecase } from "../../src/usecases/create-label.default-usecase";

describe("CreateLabelDefautUseCase", () => {
   const useCase = new CreateLabelDefaultUsecase();

   it("should be defined", () => {
      expect(true).toBeTruthy();
   });

   it("should implement the CreateLabelUseCase interface", () => {
      expect(useCase.createLabel).toBeDefined();
   });

   it("should return a CreateLabelResponse", () => {
      const response = useCase.createLabel({ name: "Test Label" });
      expect(response).toBeDefined();
   });

   it("should create a label", () => {
      const response = useCase.createLabel({ name: "Test Label" });
      expect(response?.getName()).toBe("Test Label");
   });

   it("should create a label with a unique ID", () => {
      const response1 = useCase.createLabel({ name: "Test Label 1" });
      const response2 = useCase.createLabel({ name: "Test Label 2" });
      expect(response1?.getId()).not.toEqual(response2?.getId());
   });
});
