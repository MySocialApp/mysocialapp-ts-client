"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const photo_album_1 = require("../models/photo_album");
class RestPhotoAlbum extends rest_1.Rest {
    list(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new photo_album_1.PhotoAlbum(), "/photo/album?" + rest_1.Rest.encodeQueryData({
                page: page,
                size: size
            }));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/photo/album/{id}", { id: id });
            return this.conf.get(new photo_album_1.PhotoAlbum(), path);
        });
    }
    create(photoAlbum) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new photo_album_1.PhotoAlbum(), "/photo/album", photoAlbum);
        });
    }
    update(id, photoAlbum) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new photo_album_1.PhotoAlbum(), "/photo/album/" + id, photoAlbum);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/photo/album/" + id);
        });
    }
}
exports.RestPhotoAlbum = RestPhotoAlbum;
