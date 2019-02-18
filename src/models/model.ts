import * as _ from 'lodash';
import {Configuration} from "../configuration";

export interface ModelInterface {
    load(o: object, conf: Configuration)
}

export interface Serializable {
    toJson(): string

    getJsonParameters(): {}
}

export class Model implements ModelInterface, Serializable {
    protected conf: Configuration;

    load(o: any, conf?: Configuration) {
        if (conf !== undefined) {
            this.conf = conf;
        }
        _.forOwn(o, (value, key) => {
            this[key] = value
        });
    }

    constructor(o?: {}, conf?: Configuration) {
        if (o !== undefined || conf !== undefined) {
            this.load(o, conf);
        }
    }

    toJson(): string {
        return JSON.stringify(this.getJsonParameters());
    }

    getJsonParameters(): {} {
        return this;
    }
}
