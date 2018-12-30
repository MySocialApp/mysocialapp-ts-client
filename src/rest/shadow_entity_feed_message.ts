import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {TextWallMessage} from "../models/text_wall_message";

export class RestShadowEntityFeedMessage extends Rest {

    async list(id: string, page: number, size: number = 10): Promise<Feed[]> {
        let path = Rest.params("shadow/entity/{id}/wall/message?", {id: id}) + Rest.encodeQueryData({
            page: page,
            size: size
        });
        return this.conf.getList(new Feed(), path) as Promise<Feed[]>;
    }

    async create(id: string, message: TextWallMessage): Promise<Feed> {
        return this.conf.post(new Feed(), Rest.params("shadow/entity/{id}/wall/message", {id: id}), message) as Promise<Feed>;
    }

    async update(id: string, messageId: string, message: TextWallMessage): Promise<Feed> {
        let path = Rest.params("shadow/entity/{id}/wall/message/{messageId}", {id: id, messageId: messageId});
        return this.conf.put(new Feed(), path, message) as Promise<Feed>;
    }

    async delete(id: string, messageId: string): Promise<void> {
        return this.conf.deleteVoid(Rest.params("shadow/entity/{id}/wall/message/{messageId}", {
            id: id,
            messageId: messageId
        })) as Promise<void>;
    }
}
