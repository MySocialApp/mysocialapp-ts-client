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
class RestFeedLike extends rest_1.Rest {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new feed_1.Feed(), rest_1.Rest.params("feed/{id}/like", { id: id }));
        });
    }
    create(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new feed_1.Feed(), rest_1.Rest.params("feed/{id}/like", { id: id }), new empty_1.Empty());
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.deleteVoid(rest_1.Rest.params("feed/{id}/like", { id: id }));
        });
    }
}
exports.RestFeedLike = RestFeedLike;
