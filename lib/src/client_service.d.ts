import { ClientConfiguration } from "./client_configuration";
import { Configuration } from "./configuration";
import { RestLogin } from "./rest/login";
import { RestFeed } from "./rest/feed";
import { RestUserWallMessage } from "./rest/user_wall_message";
import { RestAccount } from "./rest/account";
import { RestLogout } from "./rest/logout";
import { RestConversationMessage } from "./rest/conversation_message";
import { RestRegister } from "./rest/register";
export declare class ClientService {
    clientConfiguration?: ClientConfiguration;
    configuration: Configuration;
    private restFeed?;
    private restLogin?;
    private restRegister?;
    private restLogout?;
    private restUserWallMessage?;
    private restAccount?;
    private restConversationMessage?;
    /**
     *
     * @param {Configuration} configuration
     * @param {ClientConfiguration} clientConf
     */
    constructor(configuration: Configuration, clientConf?: ClientConfiguration);
    readonly login: RestLogin;
    readonly logout: RestLogout;
    readonly register: RestRegister;
    readonly account: RestAccount;
    readonly feed: RestFeed;
    readonly userWallMessage: RestUserWallMessage;
    readonly conversationMessage: RestConversationMessage;
}
