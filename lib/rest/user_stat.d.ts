import { Rest } from "./rest";
import { UserStat } from "../models/user_stat";
export declare class RestUserStat extends Rest {
    get(userId: string, params?: {}): Promise<UserStat>;
}
