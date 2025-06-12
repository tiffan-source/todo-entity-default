import { jest } from "@jest/globals";
import { type CreateLabelUseCase } from "todo-entity";

export const CreateLabelMock: jest.Mocked<CreateLabelUseCase> = {
   createLabel: jest.fn(),
};
