import { Rest } from "./rest";
import { LoginCredentials } from "../models/login_credentials";
import { AuthenticationToken } from "../models/authentication_token";
import { AxiosResponse } from "axios";
export declare class RestLogin extends Rest {
    post(cred: LoginCredentials): Promise<AxiosResponse<AuthenticationToken>>;
}
