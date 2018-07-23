import {ClientService} from "./client_service";
import {User} from "./models/user";
import {AuthenticationToken} from "./models/authentication_token";
import {LoginCredentials} from "./models/login_credentials";
import {FluentAccount} from "./fluent_account";
import {FluentFeed} from "./fluent_feed";
import {ErrorResponse} from "./rest/error";

export class Session {
    clientService: ClientService;
    auth?: AuthenticationToken;

    _account?: FluentAccount;
    _feed?: FluentFeed;

    constructor(clientService: ClientService) {
        this.clientService = clientService;
    }

    async connect(username: string, password: string): Promise<User> {
        return new Promise<User>(((resolve, reject) => {
            let p = this.clientService.login.post(new LoginCredentials({username: username, password: password}));
            p.then(auth => {
                this.auth = auth;
                this.account.get().then(user => resolve(user));
            }).catch(err => {
                reject(err)
            })
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