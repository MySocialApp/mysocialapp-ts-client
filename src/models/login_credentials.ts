import {Model} from "./model";

module "msa";

export class LoginCredentials extends Model{
    username: string;
    password: string;
}