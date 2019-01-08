import { Rest } from "./rest";
import { User } from "../models/user";
export declare class RestUserEvent extends Rest {
    list(userId: string, page: number, size: number, params?: {}): Promise<User[]>;
}
