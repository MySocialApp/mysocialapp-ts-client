import {FluentAbstract} from "./fluent_abstract";
import {Feed} from "./models/feed";
import {FeedPost} from "./models/feed_post";
import {FeedsSearchResult} from "./models/search_result_types";

export class FluentNewsFeed extends FluentAbstract {

    list(page: number, size: number = 10): Promise<Feed[]> {
        return this.session.clientService.feed.list(page, size);
    }

    get(id: string): Promise<Feed> {
        return this.get(id);
    }

    async create(feedPost: FeedPost): Promise<Feed> {
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
    search(search: {}, page: number, size: number = 10): Promise<FeedsSearchResult> {
        return null;
    }
}