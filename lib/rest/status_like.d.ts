import { Rest } from "./rest";
import { Like } from "../models/like";
export declare class RestStatusLike extends Rest {
    list(statusId: string): Promise<Like[]>;
    create(statusId: string): Promise<Like>;
    delete(statusId: string): Promise<void>;
}
