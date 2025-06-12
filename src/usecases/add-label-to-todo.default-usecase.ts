import {
   LabelEntity,
   TodoEntity,
   type AddLabelToTodoParams,
   type AddLabelToTodoResponse,
   type AddLabelToTodoUseCase,
} from "todo-entity";

/**
 * Default implementation of the AddLabelToTodoUseCase.
 * This use case is responsible for adding a label to a todo item.
 */
export class AddLabelToTodoDefaultUseCase implements AddLabelToTodoUseCase {
   /**
    * Adds a label to a todo item.
    * @param params - The parameters compose of label and todo.
    * @returns A new TodoEntity with the added label.
    */
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
