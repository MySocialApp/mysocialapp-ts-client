"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_1 = require("./session");
const configuration_1 = require("./configuration");
const client_service_1 = require("./client_service");
const account_1 = require("./models/account");
const authentication_token_1 = require("./models/authentication_token");
const models_1 = require("./models");
const app_config_1 = require("./models/app_config");
const axios_1 = __importDefault(require("axios"));
const error_1 = require("./rest/error");
class MySocialApp {
    constructor() {
        this.configUrl = 'https://api.mysocialapp.io/api/v1/config/';
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
            return this.createAccountFromBuilder(new account_1.Account({
                email: email,
                password: password,
                first_name: firstName
            }));
        });
    }
    createAccountFromBuilder(account) {
        return __awaiter(this, void 0, void 0, function* () {
            if (account.email == "" || account.first_name == "" || account.password == "") {
                throw new Error("missing mandatory email, first_name or password");
            }
            let clientService = new client_service_1.ClientService(this.configuration);
            yield clientService.register.create(account);
            let session = new session_1.Session(clientService);
            yield session.connect(account.email, account.password);
            return session;
        });
    }
    connect(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let session = this.createSession();
            yield session.connect(email, password);
            return session;
        });
    }
    connectWithToken(token) {
        let session = this.createSession();
        session.auth = new authentication_token_1.AuthenticationToken({ access_token: token });
        session.updateToken();
        return session;
    }
    createSession() {
        return new session_1.Session(new client_service_1.ClientService(this.configuration, this._client_configuration));
    }
    resetPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createSession().account.resetPassword(email);
        });
    }
    /**
     * only works if appId is set
     */
    getConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield axios_1.default.create().get(this.configUrl + this._appId);
                return new app_config_1.AppConfig(resp.data, this.configuration);
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
}
exports.MySocialApp = MySocialApp;
exports.Models = new models_1.models();
