"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Configuration {
    constructor(appId, apiEndpointUrl) {
        this.appId = appId;
        this.apiEndpointUrl = apiEndpointUrl !== undefined ? apiEndpointUrl + "/api/v1/" : "https://" + appId + "-api.mysocialapp.io/api/v1/";
        this.httpClient = axios_1.default.create({
            baseURL: this.apiEndpointUrl,
            maxRedirects: 5,
        });
    }
    setAuth(token) {
        this.httpClient.defaults.headers = { "Authentication": token.access_token };
    }
}
exports.Configuration = Configuration;
