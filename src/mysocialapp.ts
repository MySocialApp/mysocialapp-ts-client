import {Session} from "./session";
import {Configuration} from "./configuration";
import {ClientConfiguration} from "./client_configuration";
import {ClientService} from "./client_service";
import {Account} from "./models/account";
import {AuthenticationToken} from "./models/authentication_token";
import {models} from "./models";


export class MySocialApp {

    private _client_configuration: ClientConfiguration;

    private _appId: string;
    private _apiEndpoint: string;
    models = models;

    constructor() {

    }

    setAppId(appId: string): MySocialApp {
        this._appId = appId;
        return this
    }

    setAppEndpoint(endpoint: string): MySocialApp {
        this._apiEndpoint = endpoint;
        return this
    }

    setClientConfiguration(clientConfiguration: ClientConfiguration): MySocialApp {
        this._client_configuration = clientConfiguration;
        return this;
    }

    get configuration(): Configuration {
        return new Configuration(this._appId, this._apiEndpoint);
    }

    async createAccount(email: string, password: string, firstName: string): Promise<Session> {
        return this.createAccountFromBuilder(new Account({
            email: email,
            password: password,
            first_name: firstName
        }));
    }

    async createAccountFromBuilder(account: Account): Promise<Session> {
        if (account.email == "" || account.first_name == "" || account.password == "") {
            throw new Error("missing mandatory email, first_name or password");
        }
        let clientService = new ClientService(this.configuration);
        await clientService.register.create(account);
        let session = new Session(clientService);
        await session.connect(account.email, account.password);
        return session;
    }

    async connect(email: string, password: string): Promise<Session> {
        let session = this.createSession();
        await session.connect(email, password);
        return session;
    }

    connectWithToken(token: string): Session {
        let session = this.createSession();
        session.auth = new AuthenticationToken({access_token: token});
        session.updateToken();
        return session
    }

    createSession(): Session {
        return new Session(new ClientService(this.configuration, this._client_configuration));
    }

    async resetPassword(email: string): Promise<void> {
        return this.createSession().account.resetPassword(email);
    }
}