import { AuthenticationToken } from "./models/authentication_token";
import { AxiosInstance } from 'axios';
export declare class Configuration {
    appId: string;
    apiEndpointUrl: string;
    httpClient: AxiosInstance;
    constructor(appId: string, apiEndpointUrl?: string);
    setAuth(token: AuthenticationToken): void;
}
