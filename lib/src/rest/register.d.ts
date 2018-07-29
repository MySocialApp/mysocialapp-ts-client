import { User } from "../models/user";
import { Rest } from "./rest";
export declare class RestRegister extends Rest {
    post(user: User): Promise<User>;
}
