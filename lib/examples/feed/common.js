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
const user_1 = require("../../src/models/user");
const configuration_1 = require("../../src/configuration");
const session_1 = require("../../src/session");
function banner(title) {
    console.log();
    console.log('=======================================');
    console.log('\t' + title);
    console.log('=======================================');
}
exports.banner = banner;
function heading(title) {
    console.log();
    console.log('> ' + title);
}
exports.heading = heading;
function createAccountAndGetSession() {
    return __awaiter(this, void 0, void 0, function* () {
        let user = new user_1.User();
        user.email = randomId() + "@mysocialapp.io";
        user.password = randomId();
        user.first_name = randomId();
        user.last_name = randomId();
        user.gender = user_1.Gender.Male;
        let client = getClient();
        console.info('creating user', user);
        const createdUser = yield client.register.post(user);
        console.info('Created user:', createdUser.id_str);
        yield sleep(5000);
        let session = new session_1.Session(client);
        console.info("Connect with", user);
        yield session.connect(user.email, user.password);
        return session;
    });
}
exports.createAccountAndGetSession = createAccountAndGetSession;
function getClient() {
    return new client_service_1.ClientService(new configuration_1.Configuration("u470584465854a194805"));
}
exports.getClient = getClient;
function sleep(duration) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve) => {
            setTimeout(resolve, duration);
        }));
    });
}
exports.sleep = sleep;
function randomId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 20; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
