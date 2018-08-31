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
const photo_1 = require("../models/photo");
const generic_form_data_1 = require("../models/generic_form_data");
class RestStatusComment extends rest_1.Rest {
    list(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new comment_1.Comment(), rest_1.Rest.params("/status/{id}/comment", { id: statusId }));
        });
    }
    create(statusId, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new comment_1.Comment(), rest_1.Rest.params("/status/{id}/comment", { id: statusId }), comment);
        });
    }
    update(statusId, commentId, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("/status/{id}/comment/{commentId}", { id: statusId, commentId: commentId });
            return this.conf.put(new comment_1.Comment(), path, comment);
        });
    }
    createPhoto(statusId, photo, message, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            if (message !== undefined) {
                f.append("name", message);
            }
            if (tagEntities !== undefined) {
                f.append("tag_entities", tagEntities.toJson());
            }
            let path = rest_1.Rest.params("/status/{id}/comment/photo", { id: statusId });
            return this.conf.postMultipart(new photo_1.Photo(), path, f);
        });
    }
}
exports.RestStatusComment = RestStatusComment;
