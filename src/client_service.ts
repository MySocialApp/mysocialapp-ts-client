import {ClientConfiguration} from "./client_configuration";
import {Configuration} from "./configuration";
import {RestLogin} from "./rest/login";
import {RestFeed} from "./rest/feed";

export class ClientService {
    clientConfiguration?: ClientConfiguration;
    configuration: Configuration;

    private restFeed?: RestFeed;
    private restLogin?: RestLogin;

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

    get feed(): RestFeed {
        return this.restFeed !== undefined ? this.restFeed : this.restFeed = new RestFeed(this.configuration);
    }

}