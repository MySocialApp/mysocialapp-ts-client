"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const tag_entities_1 = require("./tag_entities");
class TagEntityAbstract extends base_1.Base {
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
}
exports.TagEntityAbstract = TagEntityAbstract;
