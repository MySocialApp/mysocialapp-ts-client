import { ClientConfiguration } from "./client_configuration";
import { Configuration } from "./configuration";
import { RestLogin } from "./rest/login";
import { RestFeed } from "./rest/feed";
export declare class ClientService {
    clientConfiguration?: ClientConfiguration;
    configuration: Configuration;
    private restFeed?;
    private restLogin?;
    /**
     *
     * @param {Configuration} configuration
     * @param {ClientConfiguration} clientConf
     */
    constructor(configuration: Configuration, clientConf?: ClientConfiguration);
    readonly login: RestLogin;
    readonly feed: RestFeed;
}
