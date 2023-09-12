import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Quotes {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop()
  name: string;

  @prop()
  text: string;

  @prop()
  date: string;

  @prop({ default: () => new Date().toLocaleString() })
  createdAt: Date;
}
