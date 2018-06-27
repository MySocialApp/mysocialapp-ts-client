import {Model} from "./model";

module "msa";

export class AuthenticationToken extends Model {
    nickname: string;
    authentication_token: string;
}