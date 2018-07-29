"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const tag_entities_1 = require("./tag_entities");
class Photo extends model_1.Model {
    get tag_entities() {
        return new tag_entities_1.TagEntities(this._tag_entities);
    }
    set tag_entities(o) {
        this._tag_entities = new tag_entities_1.TagEntities(o);
    }
}
exports.Photo = Photo;
