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
const fluent_abstract_1 = require("./fluent_abstract");
const photo_1 = require("./models/photo");
class FluentPhoto extends fluent_abstract_1.FluentAbstract {
    list(page, size = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.photo.list(page, size);
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.photo.get(id);
        });
    }
    create(file, photo) {
        return __awaiter(this, void 0, void 0, function* () {
            let resp = yield this.session.clientService.photo.create(file, photo.message, photo.tag_entities);
            return new photo_1.Photo(resp.object);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.session.clientService.photo.delete(id);
        });
    }
}
exports.FluentPhoto = FluentPhoto;
