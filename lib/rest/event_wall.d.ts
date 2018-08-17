import { Rest } from "./rest";
import { Feed } from "../models/feed";
import { TextWallMessage } from "../models/text_wall_message";
export declare class RestEventWall extends Rest {
    list(eventId: string, page: number, size?: number): Promise<Feed[]>;
    createMessage(eventId: string, message: TextWallMessage): Promise<Feed>;
    updateMessage(eventId: string, messageId: string, message: TextWallMessage): Promise<Feed>;
    deleteMessage(eventId: string, messageId: string): Promise<void>;
}
