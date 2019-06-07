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
const event_1 = require("../models/event");
class RestUserEvent extends rest_1.Rest {
    list(userId, page, size, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['size'] = size;
            let path = rest_1.Rest.params("/user/{id}/event?", { id: userId }) + rest_1.Rest.encodeQueryData(params);
            return this.conf.getList(new event_1.Event(), path);
        });
    }
}
exports.RestUserEvent = RestUserEvent;
