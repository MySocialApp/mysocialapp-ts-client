import { Rest } from "./rest";
import { LoginCredentials } from "../models/login_credentials";
import { AuthenticationToken } from "../models/authentication_token";
export declare class RestLogin extends Rest {
    create(cred: LoginCredentials): Promise<AuthenticationToken>;
}
