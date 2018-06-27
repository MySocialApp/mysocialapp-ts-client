
module "msa";

export class Configuration {
    appId: string;
    apiEndpointUrl: string;

    constructor(appId: string, apiEndpointUrl?: string) {
        this.appId = appId;
        this.apiEndpointUrl = apiEndpointUrl !== undefined ? apiEndpointUrl + "/api/v1/" : "https://" + appId + "-api.mysocialapp.io/api/v1/";
    }
}