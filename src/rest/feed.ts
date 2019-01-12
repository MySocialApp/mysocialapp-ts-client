import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {Empty} from "../models/empty";
import {TextWallMessage} from "../models/text_wall_message";


export class RestFeed extends Rest {

    async get(id: string): Promise<Feed> {
        return this.conf.get(new Feed(), Rest.params('/feed/{id}', {id: id})) as Promise<Feed>;
    }

    async list(page: number = 0, size: number = 10, params: {} = {}, algorithm?: {}): Promise<Feed[]> {
        params['page'] = page;
        params['size'] = size;
        if (algorithm == null) {
            return this.conf.getList(new Feed(), '/feed?' + Rest.encodeQueryData(params)) as Promise<Feed[]>;
        } else {
            return this.conf.postList(new Feed(), '/feed?' + Rest.encodeQueryData(params), algorithm) as Promise<Feed[]>;
        }
    }

    async delete(id: string): Promise<void> {
        return this.conf.deleteVoid(Rest.params("/feed/{id}", {id: id})) as Promise<void>;
    }

    async addMessage(message: TextWallMessage): Promise<Feed> {
        return this.conf.post(new Feed(), "/feed/message", message) as Promise<Feed>;
    }

    async updateMessage(messageId: string, message: TextWallMessage): Promise<Feed> {
        return this.conf.put(new Feed(), "/user/0/feed/message/" + messageId, message) as Promise<Feed>;
    }

    async abuse(id: string): Promise<void> {
        return this.conf.postVoid(Rest.params("/feed/{id}/abuse", {id: id}), new Empty()) as Promise<void>;
    }

    async ignore(id: string): Promise<void> {
        return this.conf.postVoid(Rest.params("/feed/{id}/ignore", {id: id}), new Empty()) as Promise<void>;
    }
}
