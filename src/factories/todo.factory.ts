import type { ITodoFactory } from "todo-entity";
import { Todo } from "../entities/todo.entity";

export class TodoFactory implements ITodoFactory {
   create(title: string): Todo {
      return new Todo(title);
   }

   createWithId(id: string, title: string) {
      return new Todo(title, id);
   }
}
