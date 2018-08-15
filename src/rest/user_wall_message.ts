import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {TextWallMessage} from "../models/text_wall_message";

export class RestUserWallMessage extends Rest {
    async list(userId: string): Feed[] {
        return this.conf.getList(new Feed(), Rest.params("/user/{userId}/wall/message", {userId: userId})) as Promise<Feed[]>;
    }

    async create(userId: string, message: TextWallMessage): Feed {
        return this.conf.post(new Feed(), Rest.params("/user/{userId}/wall/message", {userId: userId}), message) as Promise<Feed>;
    }

    async update(userId: string, messageId: string, message: TextWallMessage): Feed {
        return this.conf.put(new Feed(), Rest.params("/user/{userId}/wall/message/{messageId}", {
            userId: userId,
            messageId: messageId
        }), message) as Promise<Feed>;
    }

    async delete(userId: string, messageId: string): void {
        return this.conf.delete(Rest.params("/user/{userId}/wall/message/{messageId}", {
            userId: userId,
            messageId: messageId
        })) as Promise<void>;
    }
}