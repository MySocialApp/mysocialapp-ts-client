import {Rest} from "./rest";
import {LoginCredentials} from "../models/login_credentials";
import {AuthenticationToken} from "../models/authentication_token";
import {Empty} from "../models/empty";


export class RestLogin extends Rest {

    async create(cred: LoginCredentials): Promise<AuthenticationToken> {
        return this.conf.post(new AuthenticationToken(), '/login', cred) as Promise<AuthenticationToken>;
    }

    async logAs(userId: string): Promise<AuthenticationToken> {
        return this.conf.post(new AuthenticationToken(), '/login/as/' + userId, new Empty()) as Promise<AuthenticationToken>;
    }
}
