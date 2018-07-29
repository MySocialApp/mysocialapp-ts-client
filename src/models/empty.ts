import {Model} from "./model";
export class Empty extends Model {
    toJson(): string {
        return "";
    }
}