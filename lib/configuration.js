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
const axios_1 = __importDefault(require("axios"));
const error_1 = require("./rest/error");
const user_settings_1 = require("./models/user_settings");
class Configuration {
    constructor(appId, apiEndpointUrl) {
        this.interfaceLanguage = user_settings_1.DefaultInterfaceLanguage;
        this.appId = appId;
        this.apiEndpointUrl = apiEndpointUrl !== undefined ? apiEndpointUrl + "/api/v1/" : "https://" + appId + "-api.mysocialapp.io/api/v1/";
        this.websocketEndpointUrl = "wss://" + appId + "-ws.mysocialapp.io/ws";
        this.httpClient = axios_1.default.create({
            baseURL: this.apiEndpointUrl,
            maxRedirects: 5,
        });
    }
    setAuth(token) {
        this.token = token.access_token;
    }
    setDefaultOptions(options, contentType) {
        options = options == undefined ? {} : options;
        options['headers'] = options['headers'] !== undefined ? options['headers'] : {};
        if (contentType != undefined && options['headers']['Content-Type'] === undefined) {
            options['headers']['Content-Type'] = contentType;
        }
        if (this.token !== undefined) {
            options['headers']['Authorization'] = this.token;
        }
        return options;
    }
    get(model, path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.httpClient.get(path, this.setDefaultOptions(options));
                model.load(resp.data, this);
                return model;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
    getList(model, path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.httpClient.get(path, this.setDefaultOptions(options));
                const list = [];
                for (let m of resp.data) {
                    let o = Object.create(model);
                    o.load(m, this);
                    list.push(o);
                }
                return list;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
    post(model, path, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.httpClient.post(path, body.toJson(), this.setDefaultOptions(options, "application/json"));
                model.load(resp.data, this);
                return model;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
    postList(model, path, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.httpClient.post(path, JSON.stringify(body), this.setDefaultOptions(options, "application/json"));
                const list = [];
                for (let m of resp.data) {
                    let o = Object.create(model);
                    o.load(m, this);
                    list.push(o);
                }
                return list;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
    postVoid(path, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.httpClient.post(path, body.toJson(), this.setDefaultOptions(options, "application/json"));
                return;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
    postMultipart(model, path, fd, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let body = yield fd.getBody();
                const resp = yield this.httpClient.post(path, body, this.setDefaultOptions(options, fd.getHeaders()['Content-Type']));
                model.load(resp.data, this);
                return model;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
    put(model, path, body, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.httpClient.put(path, body.toJson(), this.setDefaultOptions(options, "application/json"));
                model.load(resp.data, this);
                return model;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
    delete(model, path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.httpClient.delete(path, this.setDefaultOptions(options));
                model.load(resp.data, this);
                return model;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
    deleteVoid(path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resp = yield this.httpClient.delete(path, this.setDefaultOptions(options));
                return;
            }
            catch (error) {
                throw new error_1.ErrorResponse(error);
            }
        });
    }
}
exports.Configuration = Configuration;
