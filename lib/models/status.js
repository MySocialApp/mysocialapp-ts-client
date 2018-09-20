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
const base_wall_1 = require("./base_wall");
const status_like_1 = require("../rest/status_like");
const status_comment_1 = require("../rest/status_comment");
const status_1 = require("../rest/status");
class Status extends base_wall_1.BaseWall {
    get bodyMessage() {
        return this.message;
    }
    getLikes() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_like_1.RestStatusLike(this.conf)).list(this.id);
        });
    }
    addLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_like_1.RestStatusLike(this.conf)).create(this.id_str);
        });
    }
    deleteLike() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_like_1.RestStatusLike(this.conf)).delete(this.id_str);
        });
    }
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_comment_1.RestStatusComment(this.conf)).list(this.id_str);
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_comment_1.RestStatusComment(this.conf)).create(this.id_str, comment);
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            return (new status_1.RestStatus(this.conf)).delete(this.id_str);
        });
    }
}
exports.Status = Status;
