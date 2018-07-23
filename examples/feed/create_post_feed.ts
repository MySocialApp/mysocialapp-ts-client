import {ClientService} from "../../src/client_service";
import {Configuration} from "../../src/configuration";
import {banner} from "./common";
import {FeedPost} from "../../src/models/feed_post";
import {AccessControl} from "../../src/models/access_control";
import {Session} from "../../src/session";
import {ErrorResponse} from "../../src/rest/error";

export async function run() {
    banner("Create post on news feed");
    let appId = "u470584465854a194805"; // MySocialApp demo app Id
    let config = new Configuration(appId);
    let client = new ClientService(config);

    let post = new FeedPost();
    post.setMessage("My test message").setVisibility(AccessControl.Public);

    let session = new Session(client);
    try {
        await session.connect("alicex@mysocialapp.io", "myverysecretpassw0rd");
        const feedPost = await session.feed.sendWallPost(post);
        console.info("Feed post has been created", feedPost);

    } catch (err) {
        if (err instanceof ErrorResponse) {
            console.info("error", err.message);
        }
    }
}

//run();