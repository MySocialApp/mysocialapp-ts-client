"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entity_abstract_1 = require("./tag_entity_abstract");
class HashTag extends tag_entity_abstract_1.TagEntityAbstract {
    getJsonParameters() {
        return {
            text: this.text,
            start_index: this.start_index,
            indices: this.indices,
        };
    }
    get text_shown() {
        return this.text;
    }
    get indices() {
        return [this.start_index, this.end_index];
    }
    set indices(indices) {
        if (!indices) {
            return;
        }
        if (indices.length == 2) {
            this.start_index = indices[0];
            this.end_index = indices[1];
            return;
        }
    }
}
exports.HashTag = HashTag;
