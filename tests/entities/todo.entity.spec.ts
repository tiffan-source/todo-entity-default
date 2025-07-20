import { Label } from "../../src/entities/label.entity";
import { Todo } from "../../src/entities/todo.entity";

describe("Todo Entity", () => {
   let todo: Todo;

   beforeEach(() => {
      todo = new Todo("Test Todo");
   });

   it("should create a todo with a title", () => {
      expect(todo.getTitle()).toBe("Test Todo");
      expect(todo.getDescription()).toBe("");
      expect(todo.getDoneDate()).toBeUndefined();
      expect(todo.getDueDate()).toBeUndefined();
      expect(todo.getLabels()).toEqual([]);
   });

   it("should generate a unique ID", () => {
      const id = todo.getId();
      expect(id).toBeDefined();
      expect(typeof id).toBe("string");
   });

   it("should allow setting a description", () => {
      const description = "This is a test description.";
      todo.describe(description);
      expect(todo.getDescription()).toBe(description);
   });

   it("should mark the todo as accomplished", () => {
      const result = todo.accomplish();
      expect(result).toBe(true);
      expect(todo.getDoneDate()).toBeInstanceOf(Date);
   });

   it("should not allow re-accomplishing an already accomplished todo", () => {
      todo.accomplish();
      const result = todo.accomplish();
      expect(result).toBe(false);
      expect(todo.getDoneDate()).toBeInstanceOf(Date);
   });

   it("should allow resurrecting an accomplished todo", () => {
      todo.accomplish();
      const result = todo.resurrect();
      expect(result).toBe(true);
      expect(todo.getDoneDate()).toBeUndefined();
   });

   it("should not allow resurrecting a todo that is not accomplished", () => {
      const result = todo.resurrect();
      expect(result).toBe(false);
      expect(todo.getDoneDate()).toBeUndefined();
   });

   it("should allow adding a deadline", () => {
      const deadline = new Date("2023-12-31");
      const result = todo.addDeadline(deadline);
      expect(result).toBe(true);
      expect(todo.getDueDate()).toEqual(deadline);
   });

   it("should allow reporting a deadline", () => {
      const deadline = new Date("2023-12-31");
      const result = todo.reportDeadline(deadline);
      expect(result).toBe(true);
      expect(todo.getDueDate()).toEqual(deadline);
   });

   it("should allow adding labels", () => {
      const label1 = new Label("label1");
      const label2 = new Label("label2");

      todo.addLabel(label1);
      todo.addLabel(label2);

      expect(todo.getLabels()).toContain(label1);
      expect(todo.getLabels()).toContain(label2);

      expect(todo.getLabels().length).toBe(2);
   });

   it("should return the correct labels", () => {
      const label1 = new Label("label1");
      const label2 = new Label("label2");

      todo.addLabel(label1);
      todo.addLabel(label2);

      const labels = todo.getLabels();
      expect(labels).toContain(label1);
      expect(labels).toContain(label2);
      expect(labels.length).toBe(2);
   });

   it("should return an empty array if no labels are added", () => {
      expect(todo.getLabels()).toEqual([]);
   });

   it("should allow creating a todo with a specific ID", () => {
      const customId = "custom-id-123";
      const customTodo = new Todo("Custom Todo", customId);
      expect(customTodo.getId()).toBe(customId);
      expect(customTodo.getTitle()).toBe("Custom Todo");
   });

   it("should accomplish a todo with a specific done Date", () => {
      const doneDate = new Date("2023-01-01");
      todo.accomplish(doneDate);
      expect(todo.getDoneDate()).toEqual(doneDate);
   });

   it("should modify the title of the todo", () => {
      const newTitle = "Updated Todo Title";
      const result = todo.modifyTitle(newTitle);
      expect(result).toBe(true);
      expect(todo.getTitle()).toBe(newTitle);
   });

   it("should not modify the title if the new title is empty", () => {
      const result = todo.modifyTitle("");
      expect(result).toBe(false);
      expect(todo.getTitle()).toBe("Test Todo");
   });

   it("should not modify the title if the new title is just whitespace", () => {
      const result = todo.modifyTitle("   ");
      expect(result).toBe(false);
      expect(todo.getTitle()).toBe("Test Todo");
   });
});
