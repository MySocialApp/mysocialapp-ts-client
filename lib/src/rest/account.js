"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("./rest");
const account_1 = require("../models/account");
const photo_1 = require("../models/photo");
class RestAccount extends rest_1.Rest {
    get() {
        return this.conf.get(new account_1.Account(), '/account');
    }
    update(acc) {
        return this.conf.put(new account_1.Account(), "/account", acc);
    }
    delete(loginCredentials) {
        return this.conf.delete("/account", { data: loginCredentials.toJson() });
    }
    getCover() {
        return this.conf.get(new photo_1.Photo(), "/account/profile/cover/photo");
    }
    updateCover(image) {
        let fd = new FormData();
        fd.set("file", image);
        fd.set("file", "image");
        return this.conf.postMultipart(new photo_1.Photo(), "/account/profile/cover/photo", fd);
    }
    getProfilePhoto() {
        return this.conf.get(new photo_1.Photo(), "/account/profile/photo");
    }
    updateProfilePhoto(image) {
        let fd = new FormData();
        fd.set("file", image);
        fd.set("file", "image");
        return this.conf.postMultipart(new photo_1.Photo(), "/account/profile/photo", fd);
    }
}
exports.RestAccount = RestAccount;
