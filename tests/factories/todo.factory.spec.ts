import { TodoFactory } from "../../src/factories/todo.factory";

describe("Todo Factory", () => {
   it("should create a valid todo entity", () => {
      const todoFactory = new TodoFactory();
      const todo = todoFactory.create("Test Todo");
      expect(todo).toBeDefined();
      expect(todo.getTitle()).toBe("Test Todo");
   });

   it("should create a todo with a specific ID", () => {
      const todoFactory = new TodoFactory();
      const todo = todoFactory.createWithId("custom-id-123", "Test Todo");
      expect(todo).toBeDefined();
      expect(todo.getId()).toBe("custom-id-123");
      expect(todo.getTitle()).toBe("Test Todo");
   });
});
