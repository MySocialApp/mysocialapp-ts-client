import { Session } from "./session";
import { Configuration } from "./configuration";
import { ClientConfiguration } from "./client_configuration";
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
    connect(email: string, password: string): Promise<Session>;
    createSession(): Session;
    resetPassword(email: string): Promise<void>;
}
