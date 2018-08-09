import {User} from "../models/user";
import {Rest} from "./rest";

export class RestRegister extends Rest {
    create(user: User): Promise<User> {
        return this.conf.post(new User(), "/register", user) as Promise<User>;
    }
}