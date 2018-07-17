import {Rest} from "./rest";
import {LoginCredentials} from "../models/login_credentials";
import {AuthenticationToken} from "../models/authentication_token";
import {AxiosResponse} from "axios";


export class RestLogin extends Rest {

    async post(cred: LoginCredentials): Promise<AxiosResponse<AuthenticationToken>> {
        return this.conf.httpClient.post<AuthenticationToken>('/login', cred);
    }
}
