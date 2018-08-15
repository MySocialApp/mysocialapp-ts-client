import {Rest} from "./rest";
import {TextWallMessage} from "../models/text_wall_message";
import {Feed} from "../models/feed";

export class RestGroupWall extends Rest {
    async list(groupId: string, page: number, size?: number): Feed[] {
        let path = Rest.params("/group/{id}/wall?", {id: groupId}) + Rest.encodeQueryData({
            page: page,
            size: size !== undefined ? size : 20
        });
        return this.conf.getList(new Feed(), path) as Promise<Feed[]>;
    }

    async createMessage(groupId: string, message: TextWallMessage): Feed {
        return this.conf.post(new Feed(), Rest.params("/group/{id}/wall/message", {id: groupId}), message) as Promise<Feed>;
    }

    async updateMessage(groupId: string, messageId: string, message: TextWallMessage): Feed {
        let path = Rest.params("/group/{id}/wall/message/{messageId}", {id: groupId, messageId: messageId});
        return this.conf.put(new Feed(), path, message) as Promise<Feed>;
    }

    async deleteMessage(groupId: string, messageId: string): void {
        let path = Rest.params("/group/{id}/wall/message/{messageId}", {id: groupId, messageId: messageId});
        return this.conf.delete(path);
    }
}