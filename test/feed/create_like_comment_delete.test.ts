import {catchErrorFunc, createAccountAndGetSession, sleep} from "../common";
import {AccessControl} from "../../src/models/access_control";
import {CommentPost} from "../../src/models/comment_post";
import {FeedPost} from "../../src/models/feed_post";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            let post = (new FeedPost()).setMessage("Good day").setVisibility(AccessControl.Friend);

            const session = await createAccountAndGetSession();
            const account = await session.account.get();
            const createdPost = await session.newsFeed.create(post);
            expect(createdPost.object.id != "").toBeTruthy();
            expect(createdPost.object.bodyMessage != "").toBeTruthy();
            console.log(createdPost);
            let like = await createdPost.object.addLike();
            expect(like.id != "").toBeTruthy();

            let comment = await createdPost.object.addComment((new CommentPost()).setMessage("hello world"));
            expect(comment.message == "hello world");
            await sleep(1000);
            let likes = await createdPost.getLikes();
            expect(likes.length).toBeGreaterThan(0);
            let comments = await createdPost.getComments();
            expect(comments.length).toBeGreaterThan(0);

            await createdPost.object.delete();

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});