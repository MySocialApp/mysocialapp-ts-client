"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_wall_1 = require("./base_wall");
const tag_entities_1 = require("./tag_entities");
class TextWallMessage extends base_wall_1.BaseWall {
    toJson() {
        // TODO complete serialization
        return JSON.stringify({});
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
}
exports.TextWallMessage = TextWallMessage;
