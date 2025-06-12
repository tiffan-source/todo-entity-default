import {
   TodoEntity,
   type UncheckTodoParams,
   type UncheckTodoResponse,
   type UncheckTodoUseCase,
} from "todo-entity";

/**
 * Default implementation of the UncheckTodoUseCase.
 * This use case is responsible for marking a todo item as not completed.
 */
export class UncheckTodoDefaultUseCase implements UncheckTodoUseCase {
   /**
    * Marks a todo item as not completed.
    * @param params - The parameters containing the todo to be unchecked.
    * @returns A new TodoEntity with the completed status set to false.
    */
   uncheckTodo(params: UncheckTodoParams): UncheckTodoResponse {
      return new TodoEntity(
         params.todo.getId(),
         params.todo.getTitle(),
         false, // Set completed to false
         params.todo.getCreatedAt(), // Keep the same created at
         new Date(), // Updated at is now
         params.todo.getDescription(), // Keep the same description
         params.todo.getDueDate(), // Keep the same due date
         params.todo.getLabels(), // Keep the same labels
      );
   }
}
