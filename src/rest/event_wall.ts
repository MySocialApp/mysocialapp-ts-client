import {Model} from "../models/model";
import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {TextWallMessage} from "../models/text_wall_message";

export class RestEventWall extends Model {

    async list(eventId: string, page: number, size?: number): Feed[] {
        let path = Rest.params("/event/{id}/wall?", {id: eventId}) + Rest.encodeQueryData({
            page: page,
            size: size !== undefined ? size : 20
        });
        return this.conf.getList(new Feed(), path) as Promise<Feed[]>;
    }

    async createMessage(eventId: string, message: TextWallMessage): Feed {
        return this.conf.post(new Feed(), Rest.params("/event/{id}/wall/message", {id: eventId}), message) as Promise<Feed>;
    }

    async updateMessage(eventId: string, messageId: string, message: TextWallMessage): Feed {
        let path = Rest.params("/event/{id}/wall/message/{messageId}", {id: eventId, messageId: messageId});
        return this.conf.put(new Feed(), path, message) as Promise<Feed>;
    }

    async deleteMessage(eventId: string, messageId: string): void {
        let path = Rest.params("/event/{id}/wall/message/{messageId}", {id: eventId, messageId: messageId});
        return this.conf.delete(path);
    }
}