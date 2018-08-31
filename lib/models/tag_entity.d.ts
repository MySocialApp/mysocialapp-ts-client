import { Model } from "./model";
export declare class TagEntity extends Model {
    type: string;
    text: string;
    text_shown: string;
    indices: number[];
    getJsonParameters(): {};
}
