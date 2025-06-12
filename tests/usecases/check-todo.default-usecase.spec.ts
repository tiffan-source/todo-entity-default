import { type CheckTodoParams, TodoEntity } from "todo-entity";
import { CheckTodoDefaultUseCase } from "../../src/usecases/check-todo.default-usecase";

describe("CheckTodoDefaultUseCase", () => {
   const useCase = new CheckTodoDefaultUseCase();
   const date = new Date();

   it("should be defined", () => {
      expect(true).toBeTruthy();
   });

   it("should implement the CheckTodoUseCase interface", () => {
      expect(useCase.checkTodo).toBeDefined();
   });

   it("should return a CheckTodoResponse", () => {
      const params: CheckTodoParams = {
         todo: new TodoEntity("1", "Test Todo", false, date, date),
      };
      const response = useCase.checkTodo(params);
      expect(response).toBeDefined();
   });

   it("should check a todo", () => {
      const todo = new TodoEntity("1", "Test Todo", false, date, date);
      const params: CheckTodoParams = { todo };
      const response = useCase.checkTodo(params);
      expect(response?.isCompleted()).toBeTruthy();
   });

   it("should check a todo already completed", () => {
      const todo = new TodoEntity("1", "Test Todo", true, date, date);
      const params: CheckTodoParams = { todo };
      const response = useCase.checkTodo(params);
      expect(response?.isCompleted()).toBeTruthy();
   });

   it("should update the updatedAt field when checking a todo", () => {
      const todo = new TodoEntity("1", "Test Todo", false, date, date);
      const params: CheckTodoParams = { todo };
      const response = useCase.checkTodo(params);
      expect(response?.getUpdatedAt()).toBeInstanceOf(Date);
      expect(response?.getUpdatedAt()).not.toEqual(todo.getUpdatedAt());
   });
});
