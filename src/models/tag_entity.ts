import {Model} from "./model";

export class TagEntity extends Model {
    type: string;
    text: string;
    text_shown: string;
    indices: number[];

    getJsonParameters(): {} {
        return {
            type: this.type,
            text: this.text,
            text_shown: this.text_shown,
            indices: this.indices,
        }
    }
}