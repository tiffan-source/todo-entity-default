import {
   TodoEntity,
   type CheckTodoParams,
   type CheckTodoResponse,
   type CheckTodoUseCase,
} from "todo-entity";

/**
 * Default implementation of the CheckTodoUseCase.
 * This use case is responsible for marking a todo item as completed.
 */
export class CheckTodoDefaultUseCase implements CheckTodoUseCase {
   /**
    * Marks a todo item as completed.
    * @param params - The parameters containing the todo to be checked.
    * @returns A new TodoEntity with the completed status updated.
    */
   checkTodo(params: CheckTodoParams): CheckTodoResponse {
      const { todo } = params;
      return new TodoEntity(
         todo.getId(),
         todo.getTitle(),
         true, // Mark as completed
         todo.getCreatedAt(),
         new Date(), // Updated at is now
         todo.getDescription(),
         todo.getDueDate(),
         todo.getLabels(),
      );
   }
}
