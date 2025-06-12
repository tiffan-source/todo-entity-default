import {
   type CreateLabelUseCase,
   type CreateLabelParams,
   type CreateLabelResponse,
   LabelEntity,
} from "todo-entity";
import { v7 } from "uuid";
export class CreateLabelDefaultUsecase implements CreateLabelUseCase {
   createLabel(params: CreateLabelParams): CreateLabelResponse {
      return new LabelEntity(
         v7(), // Generate a new UUID for the label
         params.name,
         new Date(), // Created at is now
         new Date(), // Updated at is now
      );
   }
}
