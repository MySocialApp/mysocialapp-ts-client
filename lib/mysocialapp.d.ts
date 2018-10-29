import { Session } from "./session";
import { Configuration } from "./configuration";
import { ClientConfiguration } from "./client_configuration";
import { Account } from "./models/account";
import { models } from "./models";
export declare class MySocialApp {
    private _client_configuration;
    private _appId;
    private _apiEndpoint;
    constructor();
    setAppId(appId: string): MySocialApp;
    setAppEndpoint(endpoint: string): MySocialApp;
    setClientConfiguration(clientConfiguration: ClientConfiguration): MySocialApp;
    readonly configuration: Configuration;
    createAccount(email: string, password: string, firstName: string): Promise<Session>;
    createAccountFromBuilder(account: Account): Promise<Session>;
    connect(email: string, password: string): Promise<Session>;
    connectWithToken(token: string): Session;
    createSession(): Session;
    resetPassword(email: string): Promise<void>;
}
export declare const Models: models;
