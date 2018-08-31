"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
class TagEntity extends model_1.Model {
    getJsonParameters() {
        return {
            type: this.type,
            text: this.text,
            text_shown: this.text_shown,
            indices: this.indices,
        };
    }
}
exports.TagEntity = TagEntity;
