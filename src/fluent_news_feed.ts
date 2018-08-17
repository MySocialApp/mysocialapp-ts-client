import {FluentAbstract} from "./fluent_abstract";
import {Feed} from "./models/feed";
import {FeedPost} from "./models/feed_post";
import {FeedsSearchResult} from "./models/search_result_types";
(Symbol as any).asyncIterator = Symbol.asyncIterator || Symbol.for("Symbol.asyncIterator");


export class FluentNewsFeed extends FluentAbstract {

    async list(page: number, size: number = 10): Feed[] {
        return this.session.clientService.feed.list(page, size);
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

    async get(id: string): Feed {
        return this.session.clientService.feed.get(id);
    }

    async create(feedPost: FeedPost): Feed {
        let account = await this.session.account.get(true);
        if (!feedPost.hasPhoto()) {
            return this.session.clientService.userWallMessage.create(account.id, feedPost.textWallMessage)
        }
        return this.session.clientService.photo.create(feedPost._image, feedPost._message, feedPost._tag_entities);
    }


    /**
     * TODO
     * @param {{}} search
     * @param {number} page
     * @param {number} size
     * @returns {Promise<FeedsSearchResult>}
     */
    async search(search: {}, page: number, size: number = 10): FeedsSearchResult {
        return null;
    }
}