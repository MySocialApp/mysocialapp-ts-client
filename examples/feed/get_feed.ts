import {ClientService} from "../../src/client_service";
import {Configuration} from "../../src/configuration";
import {banner} from "./common";

export async function run() {
    banner("Get feed");
    let appId = "u470584465854a194805"; // MySocialApp demo app Id
    let config = new Configuration(appId);
    let client = new ClientService(config);

    const r = await client.feed.list();
    console.info("object", r[0].object);
    console.info("actor", r[0].actor);
    console.info("target", r[0].target);
    console.info("comments", r[0].object.comments.samples);
}

run();