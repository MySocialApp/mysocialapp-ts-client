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
const feed_1 = require("../models/feed");
const generic_form_data_1 = require("../models/generic_form_data");
const access_control_1 = require("../models/access_control");
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
    create(photo, message, tagEntities, albumName, visibility = access_control_1.AccessControl.Friend, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, photo.blob ? photo.blob.type : null, "image");
            if (message !== undefined) {
                f.append("message", message);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            if (albumName !== undefined) {
                f.append("album", albumName);
            }
            if (visibility !== undefined) {
                f.append("access_control", visibility);
            }
            if (payload !== undefined) {
                f.set("payload", payload);
            }
            return this.conf.postMultipart(new feed_1.Feed(), "/photo/base64", f);
        });
    }
    update(photoId, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new photo_1.Photo(), "/photo/" + photoId, photo);
        });
    }
}
exports.RestPhoto = RestPhoto;
