import {
   TodoEntity,
   type UncheckTodoParams,
   type UncheckTodoResponse,
   type UncheckTodoUseCase,
} from "todo-entity";

export class UncheckTodoDefaultUseCase implements UncheckTodoUseCase {
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
