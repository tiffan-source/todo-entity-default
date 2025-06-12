import {
   LabelEntity,
   TodoEntity,
   type AddLabelToTodoParams,
   type AddLabelToTodoResponse,
   type AddLabelToTodoUseCase,
} from "todo-entity";

export class AddLabelToTodoDefaultUseCase implements AddLabelToTodoUseCase {
   addLabelToTodo(params: AddLabelToTodoParams): AddLabelToTodoResponse {
      const { todo, label } = params;
      const newLabels: LabelEntity[] = [...(todo.getLabels() || []), label];

      const newTodo = new TodoEntity(
         todo.getId(),
         todo.getTitle(),
         todo.isCompleted(),
         todo.getCreatedAt(),
         todo.getUpdatedAt(),
         todo.getDescription(),
         todo.getDueDate(),
         newLabels,
      );
      return newTodo;
   }
}
