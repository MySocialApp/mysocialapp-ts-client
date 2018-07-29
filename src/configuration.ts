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
    private token: string;

    constructor(appId: string, apiEndpointUrl?: string) {
        this.appId = appId;
        this.apiEndpointUrl = apiEndpointUrl !== undefined ? apiEndpointUrl + "/api/v1/" : "https://" + appId + "-api.mysocialapp.io/api/v1/";
        this.httpClient = axios.create(<AxiosRequestConfig>{
            baseURL: this.apiEndpointUrl,
            maxRedirects: 5,
            headers: {'content-type': 'application/json'},
        });
    }

    setAuth(token: AuthenticationToken) {
        this.httpClient.defaults.headers["authorization"] = this.token = token.access_token;
    }

    setDefaultOptions(options:{}, contentType?: string): AxiosRequestConfig {
        options = options == undefined ? {} : options;
        options['headers'] = options['headers'] !== undefined ? options['headers'] : {};
        if (contentType !== undefined){
            options['headers']['content-type'] = contentType;
        } 
        if(this.token !== undefined) {
            options['headers']['authorization'] = this.token;
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

    public async postMultipart(model: Model, path: string, body: FormData, options?: {}): Promise<ModelInterface> {
        try {
            // TODO check
            const resp = await this.httpClient.post(path, body, this.setDefaultOptions(options, "multipart/form-data")) as AxiosResponse<ModelInterface>;
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

    public async delete(path: string, options?: {}): Promise<void> {
        try {
            const resp = await this.httpClient.delete(path, this.setDefaultOptions(options)) as AxiosResponse<ModelInterface>;
            return
        } catch (error) {
            throw new ErrorResponse(error);
        }
    }
}