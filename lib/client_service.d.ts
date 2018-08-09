import { ClientConfiguration } from "./client_configuration";
import { Configuration } from "./configuration";
import { RestLogin } from "./rest/login";
import { RestFeed } from "./rest/feed";
import { RestAccount } from "./rest/account";
import { RestLogout } from "./rest/logout";
import { RestConversationMessage } from "./rest/conversation_message";
import { RestRegister } from "./rest/register";
import { RestUserWall } from "./rest/user_wall";
export declare class ClientService {
    clientConfiguration?: ClientConfiguration;
    configuration: Configuration;
    private restFeed?;
    private restLogin?;
    private restRegister?;
    private restLogout?;
    private restUserWall?;
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
    readonly userWall: RestUserWall;
    readonly conversationMessage: RestConversationMessage;
}
