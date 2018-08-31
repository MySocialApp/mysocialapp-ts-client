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
const session_1 = require("./session");
const configuration_1 = require("./configuration");
const client_service_1 = require("./client_service");
const account_1 = require("./models/account");
class MySocialApp {
    constructor() {
    }
    setAppId(appId) {
        this._appId = appId;
        return this;
    }
    setAppEndpoint(endpoint) {
        this._apiEndpoint = endpoint;
        return this;
    }
    setClientConfiguration(clientConfiguration) {
        this._client_configuration = clientConfiguration;
        return this;
    }
    get configuration() {
        return new configuration_1.Configuration(this._appId, this._apiEndpoint);
    }
    createAccount(email, password, firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            let clientService = new client_service_1.ClientService(this.configuration);
            yield clientService.register.create(new account_1.Account({
                email: email,
                password: password,
                first_name: firstName
            }));
            let session = new session_1.Session(clientService);
            yield session.connect(email, password);
            return session;
        });
    }
    connect(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let session = new session_1.Session(new client_service_1.ClientService(this.configuration));
            yield this.publicSession.connect(email, password);
            return session;
        });
    }
    get publicSession() {
        return new session_1.Session(new client_service_1.ClientService(this.configuration));
    }
    resetPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.publicSession.account.resetPassword(email);
        });
    }
}
exports.MySocialApp = MySocialApp;