import {AuthenticationToken} from "./models/authentication_token";
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export class Configuration {
    appId: string;
    apiEndpointUrl: string;
    httpClient: AxiosInstance;

    constructor(appId: string, apiEndpointUrl?: string) {
        this.appId = appId;
        this.apiEndpointUrl = apiEndpointUrl !== undefined ? apiEndpointUrl + "/api/v1/" : "https://" + appId + "-api.mysocialapp.io/api/v1/";
        this.httpClient = axios.create(<AxiosRequestConfig>{
            baseURL: this.apiEndpointUrl,
            maxRedirects: 5,
        });
    }

    setAuth(token: AuthenticationToken) {
        this.httpClient.defaults.headers = {"Authentication": token.authentication_token};
    }
}