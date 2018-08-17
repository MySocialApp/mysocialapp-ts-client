import { Rest } from "./rest";
import { Feed } from "../models/feed";
export declare class RestShadowEntityFeed extends Rest {
    list(id: string, page: number, size?: number): Promise<Feed[]>;
    get(id: string): Promise<Feed>;
    delete(id: string): Promise<void>;
}
