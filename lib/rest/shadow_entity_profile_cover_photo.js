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
const generic_form_data_1 = require("../models/generic_form_data");
class RestShadowEntityProfileCoverPhoto extends rest_1.Rest {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = rest_1.Rest.params("shadow/entity/{id}/profile/cover/photo", { id: id });
            return this.conf.get(new photo_1.Photo(), path);
        });
    }
    set(id, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let f = new generic_form_data_1.GenericFormData();
            f.set("file", photo.blob, 'image/png', "image.png");
            return this.conf.postMultipart(new photo_1.Photo(), rest_1.Rest.params("/shadow/entity/{id}/profile/cover/photo", { id: id }), f);
        });
    }
}
exports.RestShadowEntityProfileCoverPhoto = RestShadowEntityProfileCoverPhoto;
