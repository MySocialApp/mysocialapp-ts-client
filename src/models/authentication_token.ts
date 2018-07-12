import {Model} from "./model";

export class AuthenticationToken extends Model {
    nickname: string = "";
    authentication_token: string = "";
}