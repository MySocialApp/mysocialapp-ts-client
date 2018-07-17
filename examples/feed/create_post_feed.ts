import {ClientService} from "../../src/client_service";
import {Configuration} from "../../src/configuration";
import {banner} from "./common";
import {FeedPost} from "../../src/models/feed_post";
import {AccessControl} from "../../src/models/feed";
import {LoginCredentials} from "../../src/models/login_credentials";
import {AxiosError} from "axios";

export function run() {
    banner("Create post on news feed");
    let appId = "u470584465854a194805"; // MySocialApp demo app Id
    let config = new Configuration(appId);
    let client = new ClientService(config);

    let post = new FeedPost();
    post.setMessage("My test message").setVisibility(AccessControl.Public);

    client.login.post(<LoginCredentials>{username:"alicex@mysocialapp.io", password:"myverysecretpassw0rd"}).then(creds => {
        client.configuration.setAuth(creds.data);
        client.account.get().then(account => {
            console.info("account", account);

            client.feed.create(post, account.id_str).then(r => {
                console.info("creation response", r);
            }).catch(error => {
                console.info("error creation", error);
            })
        });
    }).catch(error => {
        console.info("error auth", error);
    });

}

run();