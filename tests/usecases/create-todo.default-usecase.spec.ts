import { CreateTodoDefaultUsecase } from "../../src/usecases/create-todo.default-usecase";
import { CreateLabelMock } from "../mocks/create-label.mock";

describe("CreateTodoDefaultUsecase", () => {
   const useCase = new CreateTodoDefaultUsecase(CreateLabelMock);

   it("should be defined", () => {
      expect(true).toBeTruthy();
   });

   it("should implement the CreateTodoUseCase interface", () => {
      expect(useCase.createTodo).toBeDefined();
   });

   it("should return a CreateTodoResponse", () => {
      const response = useCase.createTodo({
         title: "Test Todo",
         description: "This is a test todo",
         completed: false,
      });
      expect(response).toBeDefined();
   });

   it("should create a todo", () => {
      const response = useCase.createTodo({
         title: "Test Todo",
         description: "This is a test todo",
         completed: false,
      });
      expect(response?.getTitle()).toBe("Test Todo");
   });
});
