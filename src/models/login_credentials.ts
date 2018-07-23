import {Model} from "./model";

export class LoginCredentials extends Model {
    username?: string = "";
    password?: string = "";

    toJson(): string {
        return JSON.stringify({username: this.username, password: this.password});
    }
}