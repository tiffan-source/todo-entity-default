import {
   type CreateTodoUseCase,
   type CreateTodoParams,
   type CreateTodoResponse,
   TodoEntity,
   LabelEntity,
   type CreateLabelUseCase,
} from "todo-entity";
import { v7 } from "uuid";

/**
 * Default implementation of the CreateTodoUseCase.
 * This use case is responsible for creating a new todo item.
 */
export class CreateTodoDefaultUsecase implements CreateTodoUseCase {
   /**
    * Constructor for CreateTodoDefaultUsecase.
    * @param createLabelUseCase - An instance of CreateLabelUseCase to handle label creation.
    */
   constructor(private readonly createLabelUseCase: CreateLabelUseCase) {}

   /**
    * Creates a new todo item.
    * @param params - The parameters containing the details of the todo to be created.
    * @returns A new TodoEntity with the generated UUID and current timestamps.
    */
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
