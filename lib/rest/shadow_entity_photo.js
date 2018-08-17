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
const feed_1 = require("../models/feed");
class RestShadowEntityPhoto extends rest_1.Rest {
    list(id, page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("shadow/entity/{id}/photo?", { id: id }) + rest_1.Rest.encodeQueryData({
                page: page,
                size: size
            });
            return this.conf.getList(new feed_1.Feed(), path);
        });
    }
    create(id, photo, message, accessControl, tagEntities) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new FormData();
            f.set("file", photo);
            if (message !== undefined) {
                f.set("message", message);
            }
            if (accessControl !== undefined) {
                f.set("access_control", accessControl);
            }
            if (tagEntities !== undefined) {
                f.set("tag_entities", tagEntities.toJson());
            }
            return this.conf.postMultipart(new feed_1.Feed(), rest_1.Rest.params("/shadow/entity/{id}/photo", { id: id }), f);
        });
    }
}
exports.RestShadowEntityPhoto = RestShadowEntityPhoto;
