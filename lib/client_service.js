"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./rest/login");
const feed_1 = require("./rest/feed");
class ClientService {
    /**
     *
     * @param {Configuration} configuration
     * @param {ClientConfiguration} clientConf
     */
    constructor(configuration, clientConf) {
        this.configuration = configuration;
        this.clientConfiguration = clientConf;
    }
    get login() {
        return this.restLogin !== undefined ? this.restLogin : this.restLogin = new login_1.RestLogin(this.configuration);
    }
    get feed() {
        return this.restFeed !== undefined ? this.restFeed : this.restFeed = new feed_1.RestFeed(this.configuration);
    }
}
exports.ClientService = ClientService;
