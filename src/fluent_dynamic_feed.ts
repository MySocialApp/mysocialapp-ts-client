import {FluentAbstract} from "./fluent_abstract";
import {Feed} from "./models/feed";
import {FeedPost} from "./models/feed_post";

export class FluentDynamicFeed extends FluentAbstract {

    list(feedId: string, page: number = 0, size: number = 10): Feed[] {
        return this.session.clientService.shadowEntityFeed.list(feedId, page, size);
    }

    async* stream() {
        let page = 0;
        while (true) {
            let feeds = await this.list(page++);
            if (!feeds.length) {
                return;
            }
            for (let feed of feeds) {
                yield feed;
            }
        }
    }

    get(feedId: string): Feed {
        return this.session.clientService.shadowEntityFeed.get(feedId);
    }

    async create(feedId: string, feedPost: FeedPost): Feed {
        if (!feedPost.hasPhoto()) {
            return this.session.clientService.shadowEntityFeedMessage.create(feedId, feedPost.textWallMessage)
        }
        return this.session.clientService.shadowEntityPhoto.create(feedId, feedPost._image, feedPost._message, feedPost._visibility, feedPost._tag_entities);
    }
}