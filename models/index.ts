// models/index.ts
import { Quotes } from "@/models/Quotes";
import { getModelForClass } from "@typegoose/typegoose";

export const QuotesModel = getModelForClass(Quotes);
// add other models here
