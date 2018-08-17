"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const photo_1 = require("./photo");
class PhotoAlbum extends model_1.Model {
    set photos(photos) {
        let list = [];
        for (let p in photos) {
            list.push(new photo_1.Photo(p, this.conf));
        }
        this._photos = list;
    }
    get photos() {
        return this._photos;
    }
}
exports.PhotoAlbum = PhotoAlbum;
