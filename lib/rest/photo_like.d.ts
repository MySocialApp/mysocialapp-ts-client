import { Rest } from "./rest";
import { Like } from "../models/like";
export declare class RestPhotoLike extends Rest {
    list(id: string): Promise<Like[]>;
    create(id: string): Promise<Like>;
    delete(id: string): Promise<void>;
}
