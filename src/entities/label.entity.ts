import type { ILabel } from "todo-entity";
import { v7 } from "uuid";

export class Label implements ILabel {
   private name: string;
   private color: string = "";
   private id: string;

   constructor(name: string, id?: string) {
      this.id = id ?? v7();
      this.name = name;
   }

   public setColor(color: string): string {
      this.color = color;
      return this.color;
   }

   public getName(): string {
      return this.name;
   }

   public setName(name: string): string {
      this.name = name;
      return this.name;
   }

   public getId(): string {
      return this.id;
   }

   public getColor(): string {
      return this.color;
   }
}
