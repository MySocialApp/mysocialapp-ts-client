"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_wall_1 = require("./base_wall");
const tag_entities_1 = require("./tag_entities");
class TextWallMessage extends base_wall_1.BaseWall {
    getJsonParameters() {
        return {
            message: this.message,
            tag_entities: this.tag_entities ? this.tag_entities.getJsonParameters() : null,
            access_control: this.access_control,
        };
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
    setTagEntities(t) {
        this.tag_entities = t;
        return this;
    }
    setVisibility(ac) {
        this.access_control = ac;
        return this;
    }
}
exports.TextWallMessage = TextWallMessage;
