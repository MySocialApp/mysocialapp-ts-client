import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {Empty} from "../models/empty";
import {TextWallMessage} from "../models/text_wall_message";


export class RestFeed extends Rest {

    get(id: string): Promise<Feed> {
        return this.conf.get(new Feed(), Rest.params('/feed/{id}', {id: id})) as Promise<Feed>;
    }

    list(page?: number, params?: {}): Promise<Feed[]> {
        params = params !== undefined ? params : {};
        params['page'] = page !== undefined ? page : 0;
        return this.conf.getList(new Feed(), '/feed?' + Rest.encodeQueryData(params)) as Promise<Feed[]>;
    }

    delete(id: string): Promise<void> {
        return this.conf.delete(Rest.params("/feed/{id}", {id: id})) as Promise<void>;
    }

    addMessage(message: TextWallMessage): Promise<Feed> {
        return this.conf.post(new Feed(), "/feed/message", message) as Promise<Feed>;
    }

    updateMessage(messageId: string, message: TextWallMessage): Promise<Feed> {
        return this.conf.post(new Feed(), "/feed/message/" + messageId, message) as Promise<Feed>;
    }

    abuse(id: string): Promise<void> {
        return this.conf.postVoid(new Empty(), Rest.params("/feed/{id}/abuse", {id: id}), new Empty()) as Promise<void>;
    }

    ignore(id: string): Promise<void> {
        return this.conf.postVoid(new Empty(), Rest.params("/feed/{id}/ignore", {id: id}), new Empty()) as Promise<void>;
    }
}
