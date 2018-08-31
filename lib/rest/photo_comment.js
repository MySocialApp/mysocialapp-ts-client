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
const comment_1 = require("../models/comment");
const generic_form_data_1 = require("../models/generic_form_data");
class RestPhotoComment extends rest_1.Rest {
    list(photoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new comment_1.Comment(), rest_1.Rest.params("photo/{id}/comment", { id: photoId }));
        });
    }
    create(photoId, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new comment_1.Comment(), rest_1.Rest.params("/photo/{id}/comment", { id: photoId }), comment);
        });
    }
    createPhoto(photoId, photo, message, tagEntities, albumName) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("name", message);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            if (albumName !== undefined) {
                f.append("album", albumName);
            }
            return this.conf.postMultipart(new comment_1.Comment(), rest_1.Rest.params("/photo/{id}/comment/photo", { id: photoId }), f);
        });
    }
}
exports.RestPhotoComment = RestPhotoComment;
