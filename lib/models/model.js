"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
class Model {
    load(o, conf) {
        if (conf !== undefined) {
            this.conf = conf;
        }
        _.forOwn(o, (value, key) => {
            this[key] = value;
        });
    }
    constructor(o, conf) {
        if (o !== undefined) {
            this.load(o, conf);
        }
        if (conf !== undefined) {
            this.load(o, conf);
        }
    }
    toJson() {
        return JSON.stringify(this.getJsonParameters());
    }
    getJsonParameters() {
        return this;
    }
    static listToParameters(models) {
        if (!models) {
            return null;
        }
        let list = [];
        for (let m of models) {
            list.push(m.getJsonParameters());
        }
        return list;
    }
}
exports.Model = Model;
