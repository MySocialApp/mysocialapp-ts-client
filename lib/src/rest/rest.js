"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rest {
    constructor(conf) {
        this.conf = conf;
    }
    static params(path, params) {
        for (let index in params) {
            let search = '{' + index + '}';
            path = path.replace(search, params[index]);
        }
        return path;
    }
    static encodeQueryData(data) {
        let ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return ret.join('&');
    }
}
exports.Rest = Rest;
