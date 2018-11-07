"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tag_entities_1 = require("./tag_entities");
const base_1 = require("./base");
const base_wall_1 = require("./base_wall");
class Photo extends base_wall_1.BaseWall {
    get tag_entities() {
        return new tag_entities_1.TagEntities(this._tag_entities);
    }
    set tag_entities(o) {
        this._tag_entities = new tag_entities_1.TagEntities(o);
    }
    get target() {
        return new base_1.Base(this._target);
    }
    set target(o) {
        this._target = new base_1.Base(o);
    }
    get body_image_url() {
        return this.high_url;
    }
}
exports.Photo = Photo;
