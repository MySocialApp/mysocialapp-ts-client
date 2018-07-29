import { Rest } from "./rest";
import { Like } from "../models/like";
export declare class RestFeedLike extends Rest {
    get(id: string): Promise<Like[]>;
    addLike(id: string): Promise<Like>;
    deleteLike(id: string): Promise<void>;
}
