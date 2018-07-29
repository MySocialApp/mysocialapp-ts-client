import { Rest } from "./rest";
import { Feed } from "../models/feed";
import { TextWallMessage } from "../models/text_wall_message";
export declare class RestUserWallMessage extends Rest {
    list(userId: string): Promise<Feed[]>;
    post(userId: string, message: TextWallMessage): Promise<Feed>;
    put(userId: string, messageId: string, message: TextWallMessage): Promise<Feed>;
    delete(userId: string, messageId: string): Promise<void>;
}
