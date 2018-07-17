import {Rest} from "./rest";
import {Feed} from "../models/feed";
import {FeedPost} from "../models/feed_post";


export class RestFeed extends Rest {

    async get(id: string): Promise<Feed> {
        return this.conf.get(new Feed(), Rest.params('/feed/{id}', {id: id})) as Promise<Feed>;
    }

    async list(page?: number, params?: {}): Promise<Feed[]> {
        params = params !== undefined ? params : {};
        params['page'] = page !== undefined ? page : 0;
        return this.conf.getList(new Feed(), '/feed?' + Rest.encodeQueryData(params)) as Promise<Feed[]>;
    }

    async delete(id: string): Promise<void> {
        return this.conf.delete(Rest.params("/feed/{id}", {id: id})) as Promise<void>;
    }

    async create(feedPost: FeedPost, userId: string): Promise<Feed> {
        return this.conf.post(new Feed(), Rest.params('/user/{userId}/wall/message', {userId: userId}), feedPost) as Promise<Feed>;
    }
}
