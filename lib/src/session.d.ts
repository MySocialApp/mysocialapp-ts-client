import { ClientService } from "./client_service";
import { User } from "./models/user";
import { AuthenticationToken } from "./models/authentication_token";
import { FluentAccount } from "./fluent_account";
import { FluentFeed } from "./fluent_feed";
export declare class Session {
    clientService: ClientService;
    auth?: AuthenticationToken;
    private _account?;
    private _feed?;
    constructor(clientService: ClientService);
    connect(username: string, password: string): Promise<User>;
    disconnect(): Promise<void>;
    readonly account: FluentAccount;
    readonly feed: FluentFeed;
}
