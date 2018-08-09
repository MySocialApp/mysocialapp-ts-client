import { Rest } from "./rest";
import { Feed } from "../models/feed";
import { TextWallMessage } from "../models/text_wall_message";
export declare class RestUserWallMessage extends Rest {
    list(userId: string): Promise<Feed[]>;
    create(userId: string, message: TextWallMessage): Promise<Feed>;
    update(userId: string, messageId: string, message: TextWallMessage): Promise<Feed>;
    delete(userId: string, messageId: string): Promise<void>;
}
