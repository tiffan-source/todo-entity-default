import { type ILabelFactory } from "todo-entity";
import { Label } from "../entities/label.entity";

export class LabelFactory implements ILabelFactory {
   create(name: string): Label {
      return new Label(name);
   }

   createWithId(id: string, name: string) {
      return new Label(name, id);
   }
}
