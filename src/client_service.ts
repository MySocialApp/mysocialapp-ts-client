import {ClientConfiguration} from "./client_configuration";
import {Configuration} from "./configuration";
import {RestLogin} from "./rest/login";
import {RestFeed} from "./rest/feed";
import {RestUserWallMessage} from "./rest/user_wall_message";
import {RestAccount} from "./rest/account";
import {RestLogout} from "./rest/logout";
import {RestConversationMessage} from "./rest/conversation_message";
import {RestRegister} from "./rest/register";

export class ClientService {
    clientConfiguration?: ClientConfiguration;
    configuration: Configuration;

    private restFeed?: RestFeed;
    private restLogin?: RestLogin;
    private restRegister?: RestRegister;
    private restLogout?: RestLogout;
    private restUserWallMessage?: RestUserWallMessage;
    private restAccount?: RestAccount;
    private restConversationMessage?: RestConversationMessage;

    /**
     *
     * @param {Configuration} configuration
     * @param {ClientConfiguration} clientConf
     */
    constructor(configuration: Configuration, clientConf?: ClientConfiguration) {
        this.configuration = configuration;
        this.clientConfiguration = clientConf;
    }

    get login(): RestLogin {
        return this.restLogin !== undefined ? this.restLogin : this.restLogin = new RestLogin(this.configuration);
    }

    get logout(): RestLogout {
        return this.restLogout !== undefined ? this.restLogout : this.restLogout = new RestLogout(this.configuration);
    }

    get register(): RestRegister {
        return this.restRegister !== undefined ? this.restRegister : this.restRegister = new RestRegister(this.configuration);
    }

    get account(): RestAccount {
        return this.restAccount !== undefined ? this.restAccount : this.restAccount = new RestAccount(this.configuration);
    }

    get feed(): RestFeed {
        return this.restFeed !== undefined ? this.restFeed : this.restFeed = new RestFeed(this.configuration);
    }

    get userWallMessage(): RestUserWallMessage {
        return this.restUserWallMessage !== undefined ? this.restUserWallMessage : this.restUserWallMessage = new RestUserWallMessage(this.configuration);
    }

    get conversationMessage(): RestConversationMessage {
        return this.restConversationMessage !== undefined ? this.restConversationMessage : this.restConversationMessage = new RestConversationMessage(this.configuration);
    }
}