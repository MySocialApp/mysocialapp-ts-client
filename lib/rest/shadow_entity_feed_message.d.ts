import { Rest } from "./rest";
import { Feed } from "../models/feed";
import { TextWallMessage } from "../models/text_wall_message";
export declare class RestShadowEntityFeedMessage extends Rest {
    list(id: string, page: number, size?: number): Promise<Feed[]>;
    create(id: string, message: TextWallMessage): Promise<Feed>;
    update(id: string, messageId: string, message: TextWallMessage): Promise<Feed>;
    delete(id: string, messageId: string): Promise<void>;
}
