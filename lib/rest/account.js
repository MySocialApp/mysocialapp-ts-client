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
const account_1 = require("../models/account");
const photo_1 = require("../models/photo");
class RestAccount extends rest_1.Rest {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new account_1.Account(), '/account');
        });
    }
    update(acc) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new account_1.Account(), "/account", acc);
        });
    }
    delete(loginCredentials) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/account", { data: loginCredentials.toJson() });
        });
    }
    getCover() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), "/account/profile/cover/photo");
        });
    }
    updateCover(image) {
        return __awaiter(this, void 0, void 0, function* () {
            let fd = new FormData();
            fd.set("file", image);
            fd.set("file", "image");
            return this.conf.postMultipart(new photo_1.Photo(), "/account/profile/cover/photo", fd);
        });
    }
    getProfilePhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new photo_1.Photo(), "/account/profile/photo");
        });
    }
    updateProfilePhoto(image) {
        return __awaiter(this, void 0, void 0, function* () {
            let fd = new FormData();
            fd.set("file", image);
            fd.set("file", "image");
            return this.conf.postMultipart(new photo_1.Photo(), "/account/profile/photo", fd);
        });
    }
}
exports.RestAccount = RestAccount;
