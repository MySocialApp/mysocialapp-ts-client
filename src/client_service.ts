import {ClientConfiguration} from "./client_configuration";
import {Configuration} from "./configuration";
import {LoginRest} from "./rest/login";
import {Rest} from "./rest/rest";

module "msa"

export class ClientService {
    clientConfiguration: ClientConfiguration;
    configuration: Configuration;

    rest: { [key: string]: Rest };

    /**
     *
     * @param {Configuration} configuration
     * @param {ClientConfiguration} configuration
     */
    constructor(configuration: Configuration, configuration?: ClientConfiguration) {
        this.configuration = configuration;
    }

    get login(): LoginRest {
        return this.getService<LoginRest>("login");
    }

    private getService<T>(name: string): T {
        return this.rest[name] !== undefined ? this.rest[name] : this.rest[name] = new T(this.configuration);
    }

}