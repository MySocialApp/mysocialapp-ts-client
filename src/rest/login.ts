import {Rest} from "./rest";
import {LoginCredentials} from "../models/login_credentials";
import {AuthenticationToken} from "../models/authentication_token";


export class RestLogin extends Rest {

    post(cred: LoginCredentials): Promise<AuthenticationToken> {
        return this.conf.post(new AuthenticationToken(), '/login', cred) as Promise<AuthenticationToken>;
    }
}
