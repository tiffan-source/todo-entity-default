import { TodoEntity } from "todo-entity";
import { UncheckTodoDefaultUseCase } from "../../src/usecases/uncheck-todo.default-usecase";

describe("UncheckTodoDefaultUseCase", () => {
   const useCase = new UncheckTodoDefaultUseCase();
   const uncheckedTodo = new TodoEntity(
      "2",
      "Unchecked Todo",
      false,
      new Date(),
      new Date(),
   );
   const checkedTodo = new TodoEntity(
      "1",
      "Checked Todo",
      true,
      new Date(),
      new Date(),
   );

   it("should be defined", () => {
      expect(true).toBeTruthy();
   });

   it("should implement the UncheckTodoUseCase interface", () => {
      expect(useCase.uncheckTodo).toBeDefined();
   });

   it("should return an UncheckTodoResponse", () => {
      const response = useCase.uncheckTodo({ todo: checkedTodo });
      expect(response).toBeDefined();
   });

   it("should uncheck a todo", () => {
      const response = useCase.uncheckTodo({ todo: checkedTodo });
      expect(response?.isCompleted()).toBeFalsy();
   });

   it("should not change a todo that is already unchecked", () => {
      const response = useCase.uncheckTodo({ todo: uncheckedTodo });
      expect(response?.isCompleted()).toBeFalsy();
   });
});
