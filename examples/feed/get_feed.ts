import {ClientService} from "../../src/client_service";
import {Configuration} from "../../src/configuration";
import {banner} from "./common";

export function run() {
    banner("Get feed");
    let appId = "u470584465854a194805"; // MySocialApp demo app Id
    let config = new Configuration(appId);
    let client = new ClientService(config);
    client.configuration.httpClient.defaults.baseURL = "https://nousmotards.com/api/v1/"

    client.feed.get().then(r => {
        console.log(r);
    })
}

run();