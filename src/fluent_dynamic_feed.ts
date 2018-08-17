import {FluentAbstract} from "./fluent_abstract";
import {Feed} from "./models/feed";
import {FeedPost} from "./models/feed_post";

export class FluentDynamicFeed extends FluentAbstract {

    async list(feedId: string, page: number = 0, size: number = 10): Promise<Feed[]> {
        return this.session.clientService.shadowEntityFeed.list(feedId, page, size);
    }

    async* stream(feedId: string) {
        let page = 0;
        while (true) {
            let feeds = await this.list(feedId, page++);
            if (!feeds.length) {
                return;
            }
            for (let feed of feeds) {
                yield feed;
            }
        }
    }

    async get(feedId: string): Promise<Feed> {
        return this.session.clientService.shadowEntityFeed.get(feedId);
    }

    async create(feedId: string, feedPost: FeedPost): Promise<Feed> {
        if (!feedPost.hasPhoto()) {
            return this.session.clientService.shadowEntityFeedMessage.create(feedId, feedPost.textWallMessage)
        }
        return this.session.clientService.shadowEntityPhoto.create(feedId, feedPost._image, feedPost._message, feedPost._visibility, feedPost._tag_entities);
    }
}