import {User} from "../models/user";
import {Rest} from "./rest";

export class RestRegister extends Rest {
    async create(user: User): User {
        return this.conf.post(new User(), "/register", user) as Promise<User>;
    }
}