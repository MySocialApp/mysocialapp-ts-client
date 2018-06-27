import {ClientService} from './client_service'
import {ClientConfiguration} from "./client_configuration";
import {Configuration} from "./configuration";

module "msa";

describe("new client", () => {
    let clientConf = new ClientConfiguration({
        readTimeout: 1000,
        writeTimeout: 1000,
        headersToInclude: {xheader: "testhead"}
    });
    let conf = new Configuration("abc");
    let client = new ClientService(conf, clientConf);
    it("appId is set", () => {
        expect(client.configuration.appId).toEqual(conf.appId);
    });
    it("readTimeout has been override", () => {
        expect(client.clientConfiguration.readTimeout).toEqual(clientConf.readTimeout);
    });
    it("endpoint contains appId", () => {
        expect(client.configuration.apiEndpointUrl).toContain(conf.appId);
    });
});


describe("new client", () => {
    let clientConf = new ClientConfiguration({
        readTimeout: 1000,
        writeTimeout: 1000,
        headersToInclude: {xheader: "testhead"}
    });
    let conf = new Configuration("abc");
    let client = new ClientService(conf, clientConf);
    it("get login service", () => {
        expect(client.login).toBeDefined();
    });
});