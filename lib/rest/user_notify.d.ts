import { Rest } from "./rest";
import { User } from "../models/user";
export declare class RestUserNotify extends Rest {
    list(page: number, size: number, params?: {}): Promise<User[]>;
    create(userId: string): Promise<User>;
    delete(userId: string): Promise<void>;
}
