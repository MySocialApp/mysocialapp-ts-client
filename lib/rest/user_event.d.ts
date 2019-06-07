import { Rest } from "./rest";
import { Event } from "../models/event";
export declare class RestUserEvent extends Rest {
    list(userId: string, page: number, size: number, params?: {}): Promise<Event[]>;
}
