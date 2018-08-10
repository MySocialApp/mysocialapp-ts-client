import { Rest } from "./rest";
import { Feed } from "../models/feed";
import { TextWallMessage } from "../models/text_wall_message";
export declare class RestFeed extends Rest {
    get(id: string): Promise<Feed>;
    list(page?: number, size?: number, params?: {}): Promise<Feed[]>;
    delete(id: string): Promise<void>;
    addMessage(message: TextWallMessage): Promise<Feed>;
    updateMessage(messageId: string, message: TextWallMessage): Promise<Feed>;
    abuse(id: string): Promise<void>;
    ignore(id: string): Promise<void>;
}
