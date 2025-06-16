import { TodoFactory } from "../../src/factories/todo.factory";

describe("Todo Factory", () => {
   it("should create a valid todo entity", () => {
      const todoFactory = new TodoFactory();
      const todo = todoFactory.create("Test Todo");
      expect(todo).toBeDefined();
      expect(todo.getTitle()).toBe("Test Todo");
   });
});
