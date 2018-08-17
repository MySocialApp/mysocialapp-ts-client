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
const status_1 = require("../models/status");
class RestStatus extends rest_1.Rest {
    list(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new status_1.Status(), "/status?page=" + page);
        });
    }
    get(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new status_1.Status(), "/status/" + statusId);
        });
    }
    create(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.post(new status_1.Status(), "/status", status);
        });
    }
    update(statusId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.put(new status_1.Status(), "/status/" + statusId, status);
        });
    }
    delete(statusId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.delete("/status/" + statusId);
        });
    }
}
exports.RestStatus = RestStatus;
