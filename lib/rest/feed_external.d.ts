import { Feed } from "../models/feed";
export declare class RestFeedExternal extends Feed {
    get(externalId: string): Promise<Feed>;
}
