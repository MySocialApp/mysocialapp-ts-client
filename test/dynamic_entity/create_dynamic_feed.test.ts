import {catchErrorFunc, createAccountAndGetSession} from "../common";
import {FeedPost} from "../../src/models/feed_post";
import {AccessControl} from "../../src/models/access_control";
import {Feed} from "../../src/models/feed";
import {CommentPost} from "../../src/models/comment_post";

jest.setTimeout(60000);
describe("create dynamic feed", () => {
    it("has created dynamic feed", async () => {
        try {
            const session = await createAccountAndGetSession();
            const userAccount = await session.account.get();

            let feedPost = new FeedPost().setVisibility(AccessControl.Public)
                .setMessage("test");

            let feedCreated = await session.dynamicFeed.create("123", feedPost) as Feed;
            let comment = await feedCreated.addComment(new CommentPost().setMessage("comment"));
            await feedCreated.delete();
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});