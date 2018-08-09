import {ClientService} from "../src/client_service";
import {Gender, User} from "../src/models/user";
import {Configuration} from "../src/configuration";
import {Session} from "../src/session";


export function banner(title: string): void {
    console.log();
    console.log('=======================================');
    console.log('\t' + title);
    console.log('=======================================');
}

export function heading(title: string): void {
    console.log();
    console.log('> ' + title);
}

export async function createAccountAndGetSession(): Promise<Session> {
    let user = new User();
    user.email = randomId() + "@mysocialapp.io";
    user.password = randomId();
    user.first_name = randomId();
    user.last_name = randomId();
    user.gender = Gender.Male;
    let client = getClient();
    const createdUser = await client.register.create(user);

    await sleep(1000);
    let session = new Session(client);
    await session.connect(user.email, user.password);
    return session;
}

export function getClient(): ClientService {
    return new ClientService(new Configuration("u470584465854a194805"));
}

export async function sleep(duration: number): Promise<{}> {
    return new Promise(((resolve) => {
        setTimeout(resolve, duration);
    }));
}

function randomId(): string {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 20; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}