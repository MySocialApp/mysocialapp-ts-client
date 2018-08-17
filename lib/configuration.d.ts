import { AuthenticationToken } from "./models/authentication_token";
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Model, ModelInterface, Serializable } from "./models/model";
import { InterfaceLanguage } from "./models/user_settings";
export declare class Configuration {
    appId: string;
    apiEndpointUrl: string;
    httpClient: AxiosInstance;
    interfaceLanguage: InterfaceLanguage;
    private token;
    constructor(appId: string, apiEndpointUrl?: string);
    setAuth(token: AuthenticationToken): void;
    setDefaultOptions(options: {}, contentType?: string): AxiosRequestConfig;
    get(model: Model, path: string, options?: any): Promise<ModelInterface>;
    getList(model: Model, path: string, options?: any): Promise<ModelInterface[]>;
    post(model: Model, path: string, body: Serializable, options?: {}): Promise<ModelInterface>;
    postVoid(path: string, body: Serializable, options?: {}): Promise<void>;
    postMultipart(model: Model, path: string, body: FormData, options?: {}): Promise<ModelInterface>;
    put(model: Model, path: string, body: Serializable, options?: {}): Promise<ModelInterface>;
    delete(path: string, options?: {}): Promise<void>;
}
