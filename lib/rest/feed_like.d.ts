import { Rest } from "./rest";
import { Like } from "../models/like";
export declare class RestFeedLike extends Rest {
    get(id: string): Promise<Like[]>;
    create(id: string): Promise<Like>;
    delete(id: string): Promise<void>;
}
