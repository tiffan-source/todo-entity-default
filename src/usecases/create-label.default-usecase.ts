import {
   type CreateLabelUseCase,
   type CreateLabelParams,
   type CreateLabelResponse,
   LabelEntity,
} from "todo-entity";
import { v7 } from "uuid";

/**
 * Default implementation of the CreateLabelUseCase.
 * This use case is responsible for creating a new label.
 */
export class CreateLabelDefaultUsecase implements CreateLabelUseCase {
   /**
    * Creates a new label.
    * @param params - The parameters containing the name of the label.
    * @returns A new LabelEntity with the generated UUID and current timestamps.
    */
   createLabel(params: CreateLabelParams): CreateLabelResponse {
      return new LabelEntity(
         v7(), // Generate a new UUID for the label
         params.name,
         new Date(), // Created at is now
         new Date(), // Updated at is now
      );
   }
}
