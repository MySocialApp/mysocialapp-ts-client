import {AuthenticationToken} from "./models/authentication_token";
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Model, ModelInterface, Serializable} from "./models/model";
import {ErrorResponse} from "./rest/error";
import {DefaultInterfaceLanguage, InterfaceLanguage} from "./models/user_settings";

export class Configuration {
    appId: string;
    apiEndpointUrl: string;
    httpClient: AxiosInstance;
    interfaceLanguage: InterfaceLanguage = DefaultInterfaceLanguage;

    constructor(appId: string, apiEndpointUrl?: string) {
        this.appId = appId;
        this.apiEndpointUrl = apiEndpointUrl !== undefined ? apiEndpointUrl + "/api/v1/" : "https://" + appId + "-api.mysocialapp.io/api/v1/";
        this.httpClient = axios.create(<AxiosRequestConfig>{
            baseURL: this.apiEndpointUrl,
            maxRedirects: 5,
        });
    }

    setAuth(token: AuthenticationToken) {
        this.httpClient.defaults.headers["Authorization"] = token.access_token;
    }


    public async get(model: Model, path: string, options?: any): Promise<ModelInterface> {
        try {
            const resp = await this.httpClient.get(path, <AxiosRequestConfig>options) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async getList(model: Model, path: string, options?: any): Promise<ModelInterface[]> {
        try {
            const resp = await this.httpClient.get(path, <AxiosRequestConfig>options) as AxiosResponse<ModelInterface[]>;
            const list: ModelInterface[] = [];
            for (let m of resp.data) {
                let o = Object.create(model) as ModelInterface;
                o.load(m, this);
                list.push(o);
            }
            return list
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async post(model: Model, path: string, body: Serializable, options?: {}): Promise<ModelInterface> {
        try {
            options = options !== options ? undefined : {};
            options['headers'] = options['headers'] !== undefined ? options['headers'] : {};
            options['headers']['content-type'] = "application/json";
            const resp = await this.httpClient.post(path, body.toJson(), <AxiosRequestConfig>options) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async postMultipart(model: Model, path: string, body: FormData, options?: {}): Promise<ModelInterface> {
        try {
            options = options !== options ? undefined : {};
            options['headers'] = options['headers'] !== undefined ? options['headers'] : {};
            options['headers']['content-type'] = "multipart/form-data";
            // TODO check
            const resp = await this.httpClient.post(path, body, <AxiosRequestConfig>options) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async put(model: Model, path: string, body: Serializable, options?: {}): Promise<ModelInterface> {
        try {
            options = options !== options ? undefined : {};
            options['headers'] = options['headers'] !== undefined ? options['headers'] : {};
            options['headers']['content-type'] = "application/json";
            const resp = await this.httpClient.put(path, body.toJson(), <AxiosRequestConfig>options) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async delete(path: string, options?: {}): Promise<void> {
        try {
            const resp = await this.httpClient.delete(path, <AxiosRequestConfig>options) as AxiosResponse<ModelInterface>;
            return
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }
}