import { TagEntityAbstract } from "./tag_entity_abstract";
export declare class HashTag extends TagEntityAbstract {
    text: string;
    start_index: number;
    end_index: number;
    getJsonParameters(): {};
    readonly text_shown: string;
    indices: number[];
}
