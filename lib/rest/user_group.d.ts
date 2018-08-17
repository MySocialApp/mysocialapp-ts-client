import { Rest } from "./rest";
import { Group } from "../models/group";
export declare class RestUserGroup extends Rest {
    list(userId: string, page: number, size: number, params?: {}): Promise<Group[]>;
}
