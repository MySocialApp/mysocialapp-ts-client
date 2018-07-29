"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_service_1 = require("./client_service");
const client_configuration_1 = require("./client_configuration");
const configuration_1 = require("./configuration");
describe("new client", () => {
    let clientConf = new client_configuration_1.ClientConfiguration({
        readTimeout: 1000,
        writeTimeout: 1000,
        headersToInclude: { xheader: "testhead" }
    });
    let conf = new configuration_1.Configuration("abc");
    let client = new client_service_1.ClientService(conf, clientConf);
    it("appId is set", () => {
        expect(client.configuration.appId).toEqual(conf.appId);
    });
    it("readTimeout has been override", () => {
        expect(client.clientConfiguration ? client.clientConfiguration.readTimeout : null).toEqual(clientConf.readTimeout);
    });
    it("endpoint contains appId", () => {
        expect(client.configuration.apiEndpointUrl).toContain(conf.appId);
    });
});
describe("new client", () => {
    let clientConf = new client_configuration_1.ClientConfiguration({
        readTimeout: 1000,
        writeTimeout: 1000,
        headersToInclude: { xheader: "testhead" }
    });
    let conf = new configuration_1.Configuration("abc");
    let client = new client_service_1.ClientService(conf, clientConf);
    it("get login service", () => {
        expect(client.login).toBeDefined();
    });
});
