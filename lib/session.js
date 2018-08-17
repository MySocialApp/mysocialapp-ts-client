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
const login_credentials_1 = require("./models/login_credentials");
const fluent_account_1 = require("./fluent_account");
const fluent_feed_1 = require("./fluent_feed");
const fluent_conversation_1 = require("./fluent_conversation");
const fluent_event_1 = require("./fluent_event");
const fluent_friend_1 = require("./fluent_friend");
const fluent_group_1 = require("./fluent_group");
const fluent_news_feed_1 = require("./fluent_news_feed");
const fluent_notification_1 = require("./fluent_notification");
const fluent_photo_1 = require("./fluent_photo");
const fluent_photo_album_1 = require("./fluent_photo_album");
const fluent_user_1 = require("./fluent_user");
const fluent_dynamic_feed_1 = require("./fluent_dynamic_feed");
class Session {
    constructor(clientService) {
        this.clientService = clientService;
    }
    connect(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    this.auth = yield this.clientService.login.create(new login_credentials_1.LoginCredentials({
                        username: username,
                        password: password
                    }));
                    this.clientService.configuration.setAuth(this.auth);
                    let account = yield this.account.get();
                    resolve(account);
                }
                catch (err) {
                    reject(err);
                }
            })));
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.clientService.logout.do();
        });
    }
    get account() {
        return this._account !== undefined ? this._account : this._account = new fluent_account_1.FluentAccount(this);
    }
    get conversation() {
        return this._conversation !== undefined ? this._conversation : this._conversation = new fluent_conversation_1.FluentConversation(this);
    }
    get event() {
        return this._event !== undefined ? this._event : this._event = new fluent_event_1.FluentEvent(this);
    }
    get feed() {
        return this._feed !== undefined ? this._feed : this._feed = new fluent_feed_1.FluentFeed(this);
    }
    get friend() {
        return this._friend !== undefined ? this._friend : this._friend = new fluent_friend_1.FluentFriend(this);
    }
    get group() {
        return this._group !== undefined ? this._group : this._group = new fluent_group_1.FluentGroup(this);
    }
    get newsFeed() {
        return this._newFeed !== undefined ? this._newFeed : this._newFeed = new fluent_news_feed_1.FluentNewsFeed(this);
    }
    get dynamicFeed() {
        return this._dynamicFeed !== undefined ? this._dynamicFeed : this._dynamicFeed = new fluent_dynamic_feed_1.FluentDynamicFeed(this);
    }
    get notification() {
        return this._notification !== undefined ? this._notification : this._notification = new fluent_notification_1.FluentNotification(this);
    }
    get photo() {
        return this._photo !== undefined ? this._photo : this._photo = new fluent_photo_1.FluentPhoto(this);
    }
    get photoAlbum() {
        return this._photoAlbum !== undefined ? this._photoAlbum : this._photoAlbum = new fluent_photo_album_1.FluentPhotoAlbum(this);
    }
    get user() {
        return this._user !== undefined ? this._user : this._user = new fluent_user_1.FluentUser(this);
    }
}
exports.Session = Session;
