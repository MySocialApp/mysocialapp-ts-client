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
class RestUserAlbum extends rest_1.Rest {
    list(userId, page, size, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['size'] = size;
            let path = rest_1.Rest.params("/user/{id}/album?", { id: userId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new photo_album_1.PhotoAlbum(), path);
        });
    }
}
exports.RestUserAlbum = RestUserAlbum;
