import {Model} from "./model";

export class LoginCredentials extends Model {
    username?: string;
    password?: string;

    toJson(): string {
        return JSON.stringify(this.getJsonParameters());
    }

    getJsonParameters(): {} {
        return {username: this.username, password: this.password};
    }
}