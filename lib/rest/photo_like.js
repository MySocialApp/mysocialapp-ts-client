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
const like_1 = require("../models/like");
const empty_1 = require("../models/empty");
class RestPhotoLike extends rest_1.Rest {
    list(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new like_1.Like(), rest_1.Rest.params("/photo/{id}/like", { id: id }));
        });
    }
    create(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new like_1.Like(), rest_1.Rest.params("/photo/{id}/like", { id: id }), new empty_1.Empty());
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.deleteVoid(rest_1.Rest.params("/photo/{id}/like", { id: id }));
        });
    }
}
exports.RestPhotoLike = RestPhotoLike;
