"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = require("./rest/login");
const feed_1 = require("./rest/feed");
const user_wall_message_1 = require("./rest/user_wall_message");
const account_1 = require("./rest/account");
const logout_1 = require("./rest/logout");
const conversation_message_1 = require("./rest/conversation_message");
const register_1 = require("./rest/register");
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
    get logout() {
        return this.restLogout !== undefined ? this.restLogout : this.restLogout = new logout_1.RestLogout(this.configuration);
    }
    get register() {
        return this.restRegister !== undefined ? this.restRegister : this.restRegister = new register_1.RestRegister(this.configuration);
    }
    get account() {
        return this.restAccount !== undefined ? this.restAccount : this.restAccount = new account_1.RestAccount(this.configuration);
    }
    get feed() {
        return this.restFeed !== undefined ? this.restFeed : this.restFeed = new feed_1.RestFeed(this.configuration);
    }
    get userWallMessage() {
        return this.restUserWallMessage !== undefined ? this.restUserWallMessage : this.restUserWallMessage = new user_wall_message_1.RestUserWallMessage(this.configuration);
    }
    get conversationMessage() {
        return this.restConversationMessage !== undefined ? this.restConversationMessage : this.restConversationMessage = new conversation_message_1.RestConversationMessage(this.configuration);
    }
}
exports.ClientService = ClientService;
