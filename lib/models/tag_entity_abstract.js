"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entities_1 = require("./tag_entities");
const model_1 = require("./model");
class TagEntityAbstract extends model_1.Model {
    getJsonParameters() {
        return {
            tag_entities: this.tag_entities.getJsonParameters(),
        };
    }
    get tag_entities() {
        return this._tag_entities;
    }
    set tag_entities(t) {
        this._tag_entities = new tag_entities_1.TagEntities(t);
    }
}
exports.TagEntityAbstract = TagEntityAbstract;
