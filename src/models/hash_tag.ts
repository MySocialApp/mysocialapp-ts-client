import {TagEntityAbstract} from "./tag_entity_abstract";

export class HashTag extends TagEntityAbstract {
    text: string;
    start_index: number;
    end_index: number;

    getJsonParameters(): {} {
        return {
            text: this.text,
            start_index: this.start_index,
            indices: this.indices,
        };
    }

    get text_shown(): string {
        return this.text;
    }

    get indices(): number[] {
        return [this.start_index, this.end_index];
    }

    set indices(indices: number[]) {
        if (!indices) {
            return
        }

        if (indices.length == 2) {
            this.start_index = indices[0];
            this.end_index = indices[1];
            return
        }
    }
}