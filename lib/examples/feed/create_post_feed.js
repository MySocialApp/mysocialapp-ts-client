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
const access_control_1 = require("../../src/models/access_control");
const session_1 = require("../../src/session");
const error_1 = require("../../src/rest/error");
const text_wall_message_1 = require("../../src/models/text_wall_message");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        common_1.banner("Create post on news feed");
        let appId = "u470584465854a194805"; // MySocialApp demo app Id
        let config = new configuration_1.Configuration(appId);
        let client = new client_service_1.ClientService(config);
        let post = new text_wall_message_1.TextWallMessage();
        post.setMessage("My test message").setVisibility(access_control_1.AccessControl.Public);
        let session = new session_1.Session(client);
        try {
            yield session.connect("alicex@mysocialapp.io", "myverysecretpassw0rd");
            const feedPost = yield session.feed.sendWallPost(post);
            console.info("Feed post has been created", feedPost);
        }
        catch (err) {
            if (err instanceof error_1.ErrorResponse) {
                console.info("error", err.message);
            }
        }
    });
}
exports.run = run;
//run();
