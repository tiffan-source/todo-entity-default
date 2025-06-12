import {
   TodoEntity,
   type CheckTodoParams,
   type CheckTodoResponse,
   type CheckTodoUseCase,
} from "todo-entity";

export class CheckTodoDefaultUseCase implements CheckTodoUseCase {
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
