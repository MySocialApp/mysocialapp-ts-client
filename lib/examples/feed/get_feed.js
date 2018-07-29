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
const client_service_1 = require("../../src/client_service");
const configuration_1 = require("../../src/configuration");
const common_1 = require("./common");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        common_1.banner("Get feed");
        let appId = "u470584465854a194805"; // MySocialApp demo app Id
        let config = new configuration_1.Configuration(appId);
        let client = new client_service_1.ClientService(config);
        const r = yield client.feed.list();
        console.info("object", r[0].object);
        console.info("actor", r[0].actor);
        console.info("target", r[0].target);
        console.info("comments", r[0].object.comments.samples);
    });
}
exports.run = run;
run();
