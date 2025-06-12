import {
   type AddLabelToTodoParams,
   LabelEntity,
   TodoEntity,
} from "todo-entity";
import { AddLabelToTodoDefaultUseCase } from "../../src/usecases/add-label-to-todo.default-usecase";

describe("AddLabelToTodoDefaultUseCase", () => {
   const useCase = new AddLabelToTodoDefaultUseCase();
   const date = new Date();

   it("should be defined", () => {
      expect(true).toBeTruthy();
   });

   it("should implement the AddLabelToTodoUseCase interface", () => {
      const useCase = new AddLabelToTodoDefaultUseCase();
      expect(useCase.addLabelToTodo).toBeDefined();
   });

   it("should return an AddLabelToTodoResponse", () => {
      const params: AddLabelToTodoParams = {
         todo: new TodoEntity("1", "Test Todo", false, date, date),
         label: new LabelEntity("1", "Test Label", date, date),
      };
      const response = useCase.addLabelToTodo(params);
      expect(response).toBeDefined();
   });

   it("should add a label to a todo", () => {
      const todo = new TodoEntity("1", "Test Todo", false, date, date);
      const label = new LabelEntity("1", "Test Label", date, date);
      const params: AddLabelToTodoParams = { todo, label };
      const response = useCase.addLabelToTodo(params);
      expect(response?.getLabels()).toContain(label);
   });

   it("should add todo with existing labels", () => {
      const todo = new TodoEntity(
         "1",
         "Test Todo",
         false,
         date,
         date,
         undefined,
         undefined,
         [
            new LabelEntity("1", "Test Label 1", date, date),
            new LabelEntity("2", "Test Label 2", date, date),
         ],
      );
      const params: AddLabelToTodoParams = {
         todo,
         label: new LabelEntity("3", "Test Label 3", date, date),
      };
      const response = useCase.addLabelToTodo(params);
      expect(response?.getLabels()).toHaveLength(3);
      expect(
         response?.getLabels()?.some((label) => label.getId() === "3"),
      ).toBeTruthy();
   });
});
