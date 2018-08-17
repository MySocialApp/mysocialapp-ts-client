import { Rest } from "./rest";
import { Feed } from "../models/feed";
export declare class RestUserWall extends Rest {
    list(userId: string, page: number, size?: number): Promise<Feed[]>;
}
