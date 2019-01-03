import {Feed} from "../models/feed";

export class RestFeedExternal extends Feed {
    async get(externalId: string): Promise<Feed> {
        return this.conf.get(new Feed(), "/feed/external/" + externalId) as Promise<Feed>;
    }
}