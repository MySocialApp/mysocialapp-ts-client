import {AuthenticationToken} from "./models/authentication_token";
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {Model, ModelInterface, Serializable} from "./models/model";
import {ErrorResponse} from "./rest/error";
import {DefaultInterfaceLanguage, InterfaceLanguage} from "./models/user_settings";
import {GenericFormData} from "./models/generic_form_data";

export class Configuration {
    appId: string;
    apiEndpointUrl: string;
    websocketEndpointUrl: string;
    httpClient: AxiosInstance;
    interfaceLanguage: InterfaceLanguage = DefaultInterfaceLanguage;
    token: string;

    constructor(appId: string, apiEndpointUrl?: string) {
        this.appId = appId;
        this.apiEndpointUrl = apiEndpointUrl !== undefined ? apiEndpointUrl + "/api/v1/" : "https://" + appId + "-api.mysocialapp.io/api/v1/";
        this.websocketEndpointUrl = "wss://" + appId + "-ws.mysocialapp.io/ws";
        this.httpClient = axios.create(<AxiosRequestConfig>{
            baseURL: this.apiEndpointUrl,
            maxRedirects: 5,
        });
    }

    setAuth(token: AuthenticationToken) {
        this.token = token.access_token;
    }

    setDefaultOptions(options: {}, contentType?: string): AxiosRequestConfig {
        options = options == undefined ? {} : options;
        options['headers'] = options['headers'] !== undefined ? options['headers'] : {};
        if (contentType != undefined && options['headers']['Content-Type'] === undefined) {
            options['headers']['Content-Type'] = contentType;
        }
        if (this.token !== undefined) {
            options['headers']['Authorization'] = this.token;
        }
        return <AxiosRequestConfig>options;
    }


    public async get(model: Model, path: string, options?: any): Promise<ModelInterface> {
        try {
            const resp = await this.httpClient.get(path, this.setDefaultOptions(options)) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async getList(model: Model, path: string, options?: any): Promise<ModelInterface[]> {
        try {
            const resp = await this.httpClient.get(path, this.setDefaultOptions(options)) as AxiosResponse<ModelInterface[]>;
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
            const resp = await this.httpClient.post(path, body.toJson(), this.setDefaultOptions(options, "application/json")) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async postVoid(path: string, body: Serializable, options?: {}): Promise<void> {
        try {
            const resp = await this.httpClient.post(path, body.toJson(), this.setDefaultOptions(options, "application/json")) as AxiosResponse<ModelInterface>;
            return
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async postMultipart(model: Model, path: string, fd: GenericFormData, options: {} = {}): Promise<ModelInterface> {
        try {
            let body = await fd.getBody();
            const resp = await this.httpClient.post(path, body, this.setDefaultOptions(options, fd.getHeaders()['Content-Type'])) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async put(model: Model, path: string, body: Serializable, options?: {}): Promise<ModelInterface> {
        try {
            const resp = await this.httpClient.put(path, body.toJson(), this.setDefaultOptions(options, "application/json")) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async delete(model: Model, path: string, options?: {}): Promise<ModelInterface> {
        try {
            const resp = await this.httpClient.delete(path, this.setDefaultOptions(options)) as AxiosResponse<ModelInterface>;
            model.load(resp.data, this);
            return model
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }

    public async deleteVoid(path: string, options?: {}): Promise<void> {
        try {
            const resp = await this.httpClient.delete(path, this.setDefaultOptions(options)) as AxiosResponse<ModelInterface>;
            return
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }
}
