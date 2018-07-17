import {ClientConfiguration} from "./client_configuration";
import {Configuration} from "./configuration";
import {RestLogin} from "./rest/login";
import {RestFeed} from "./rest/feed";
import {RestUserWallMessage} from "./rest/user_wall_message";
import {RestAccount} from "./rest/account";

export class ClientService {
    clientConfiguration?: ClientConfiguration;
    configuration: Configuration;

    private restFeed?: RestFeed;
    private restLogin?: RestLogin;
    private restUserWallMessage?: RestUserWallMessage;
    private restAccount?: RestAccount;

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

    get account(): RestAccount {
        return this.restAccount !== undefined ? this.restAccount : this.restAccount = new RestAccount(this.configuration);
    }

    get feed(): RestFeed {
        return this.restFeed !== undefined ? this.restFeed : this.restFeed = new RestFeed(this.configuration);
    }

    get userWallMessage(): RestUserWallMessage {
        return this.restUserWallMessage !== undefined ? this.restUserWallMessage : this.restUserWallMessage = new RestUserWallMessage(this.configuration);
    }
}