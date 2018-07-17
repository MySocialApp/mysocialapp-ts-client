import {Model} from "./model";

export class AuthenticationToken extends Model {
    nickname: string = "";
    access_token: string = "";
}