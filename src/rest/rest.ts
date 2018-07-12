import {Configuration} from "../configuration";
import {AxiosPromise, AxiosRequestConfig, AxiosResponse} from "axios";
import {Model, ModelInterface} from "../models/model";

export class Rest {
    protected conf: Configuration;

    constructor(conf: Configuration) {
        this.conf = conf;
    }

    protected async Get(model: Model, path: string, options?: any): Promise<ModelInterface> {
        try {
            const resp = await this.conf.httpClient.get(path, <AxiosRequestConfig>options) as AxiosResponse<ModelInterface>;
            model.load(resp.data);
            return model
        } catch (error) {
            return error
        }
    }

    protected async GetList(model: Model, path: string, options?: any): Promise<ModelInterface[]> {
        try {
            const resp = await this.conf.httpClient.get(path, <AxiosRequestConfig>options) as AxiosResponse<ModelInterface[]>;
            const list: ModelInterface[] = [];
            for (let m of resp.data) {
                let o = Object.create(model) as ModelInterface;
                o.load(m);
                list.push(o);
            }
            return list
        } catch (error) {
            return error
        }
    }
}