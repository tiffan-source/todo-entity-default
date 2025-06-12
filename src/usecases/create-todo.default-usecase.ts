import {
   type CreateTodoUseCase,
   type CreateTodoParams,
   type CreateTodoResponse,
   TodoEntity,
   LabelEntity,
   type CreateLabelUseCase,
} from "todo-entity";
import { v7 } from "uuid";

export class CreateTodoDefaultUsecase implements CreateTodoUseCase {
   constructor(private readonly createLabelUseCase: CreateLabelUseCase) {}
   createTodo(params: CreateTodoParams): CreateTodoResponse {
      let labels: LabelEntity[] | undefined;

      if (params.labels && params.labels.length > 0) {
         labels = params.labels.map(
            (label) =>
               this.createLabelUseCase.createLabel({
                  name: label,
               }) as LabelEntity,
         );
      }

      return new TodoEntity(
         v7(), // Generate a new UUID for the todo
         params.title,
         params.completed || false, // Default to false if not provided
         new Date(), // Created at is now
         new Date(), // Updated at is now
         params.description || "", // Default to empty string if not provided
         params.dueDate, // Default to null if not provided
         labels, // Labels can be undefined if not provided
      );
   }
}
