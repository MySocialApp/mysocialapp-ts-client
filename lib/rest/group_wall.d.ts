import { Rest } from "./rest";
import { TextWallMessage } from "../models/text_wall_message";
import { Feed } from "../models/feed";
export declare class RestGroupWall extends Rest {
    list(groupId: string, page: number, size?: number): Promise<Feed[]>;
    createMessage(groupId: string, message: TextWallMessage): Promise<Feed>;
    updateMessage(groupId: string, messageId: string, message: TextWallMessage): Promise<Feed>;
    deleteMessage(groupId: string, messageId: string): Promise<void>;
}
