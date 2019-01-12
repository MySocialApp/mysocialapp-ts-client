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
const empty_1 = require("../models/empty");
class RestFeed extends rest_1.Rest {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new feed_1.Feed(), rest_1.Rest.params('/feed/{id}', { id: id }));
        });
    }
    list(page = 0, size = 10, params = {}, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            params['page'] = page;
            params['size'] = size;
            if (algorithm == null) {
                return this.conf.getList(new feed_1.Feed(), '/feed?' + rest_1.Rest.encodeQueryData(params));
            }
            else {
                return this.conf.postList(new feed_1.Feed(), '/feed?' + rest_1.Rest.encodeQueryData(params), algorithm);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.deleteVoid(rest_1.Rest.params("/feed/{id}", { id: id }));
        });
    }
    addMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), "/feed/message", message);
        });
    }
    updateMessage(messageId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new feed_1.Feed(), "/user/0/feed/message/" + messageId, message);
        });
    }
    abuse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.postVoid(rest_1.Rest.params("/feed/{id}/abuse", { id: id }), new empty_1.Empty());
        });
    }
    ignore(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.postVoid(rest_1.Rest.params("/feed/{id}/ignore", { id: id }), new empty_1.Empty());
        });
    }
}
exports.RestFeed = RestFeed;
