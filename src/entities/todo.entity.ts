import type { ITodo } from "todo-entity";
import type { Label } from "./label.entity";
import { v7 } from "uuid";

export class Todo implements ITodo {
   private id: string;
   private title: string;
   private description: string = "";
   private doneDate?: Date;
   private dueDate?: Date;
   private labels: Label[] = [];

   constructor(title: string, id?: string) {
      this.id = id ?? v7();
      this.title = title;
   }

   public describe(description: string): string {
      this.description = description;
      return this.description;
   }

   public accomplish(): boolean {
      if (!this.doneDate) {
         this.doneDate = new Date();
         return true;
      }
      return false;
   }

   public resurrect(): boolean {
      if (this.doneDate) {
         this.doneDate = undefined;
         return true;
      }
      return false;
   }

   public addDeadline(deadline: Date): boolean {
      this.dueDate = deadline;
      return true;
   }

   public reportDeadline(deadline: Date): boolean {
      this.dueDate = deadline;
      return true;
   }

   public getId(): string {
      return this.id;
   }

   public getTitle(): string {
      return this.title;
   }

   public getDescription(): string {
      return this.description;
   }

   public getDoneDate(): Date | undefined {
      return this.doneDate;
   }

   public getDueDate(): Date | undefined {
      return this.dueDate;
   }

   public addLabel(label: Label): number {
      return this.labels.push(label);
   }

   public getLabels(): Label[] {
      return this.labels;
   }
}
