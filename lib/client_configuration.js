"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientConfiguration {
    constructor(o) {
        this.readTimeout = 10000;
        this.writeTimeout = 10000;
        this.headersToInclude = {};
        this.debug = false;
        if (o !== undefined) {
            for (let i in o) {
                this[i] = o[i];
            }
        }
    }
}
exports.ClientConfiguration = ClientConfiguration;
