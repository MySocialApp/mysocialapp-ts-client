import {ClientService} from "./client_service";
import {User} from "./models/user";
import {AuthenticationToken} from "./models/authentication_token";
import {LoginCredentials} from "./models/login_credentials";
import {FluentAccount} from "./fluent_account";
import {FluentFeed} from "./fluent_feed";

export class Session {
    clientService: ClientService;
    auth?: AuthenticationToken;

    private _account?: FluentAccount;
    private _feed?: FluentFeed;

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    async connect(username: string, password: string): Promise<User> {
        return new Promise<User>((async (resolve, reject) => {
            try {
                this.auth = await this.clientService.login.post(new LoginCredentials({
                    username: username,
                    password: password
                }));
                this.clientService.configuration.setAuth(this.auth);
                this.account.get().then(user => resolve(user));
            } catch (err) {
                reject(err);
            }
        }));
    }

    disconnect(): Promise<void> {
        return this.clientService.logout.do();
    }

    get account(): FluentAccount {
        return this._account !== undefined ? this._account : this._account = new FluentAccount(this);
    }

    get feed(): FluentFeed {
        return this._feed !== undefined ? this._feed : this._feed = new FluentFeed(this);
    }
}