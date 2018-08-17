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
const photo_1 = require("../models/photo");
class RestPhoto extends rest_1.Rest {
    list(page, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = { page: page, size: size !== undefined ? size : 10 };
            return this.conf.getList(new photo_1.Photo(), "/photo?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    get(photoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), "/photo/" + photoId);
        });
    }
    delete(photoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/photo/" + photoId);
        });
    }
    create(photo, message, tagEntities, albumName) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new FormData();
            f.set("file", photo);
            if (message !== undefined) {
                f.set("name", message);
            }
            if (tagEntities !== undefined) {
                f.set("tag_entities", tagEntities.toJson());
            }
            if (albumName !== undefined) {
                f.set("album", albumName);
            }
            return this.conf.postMultipart(new photo_1.Photo(), "/photo", f);
        });
    }
    update(photoId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new photo_1.Photo(), "/photo/" + photoId, photo);
        });
    }
}
exports.RestPhoto = RestPhoto;
