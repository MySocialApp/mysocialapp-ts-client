import {catchErrorFunc, createAccountAndGetSession, sleep} from "../common";
import {AccessControl} from "../../src/models/access_control";
import {CommentPost} from "../../src/models/comment_post";
import {FeedPost} from "../../src/models/feed_post";

jest.setTimeout(60000);
describe("test payload", () => {
    it("should add payload to message", async () => {
        try {
            let post = (new FeedPost()).setMessage("Good day").setVisibility(AccessControl.Friend).setPayload({test:true});

            const session = await createAccountAndGetSession();
            const account = await session.account.get();
            const createdPost = await session.newsFeed.create(post);
            expect(createdPost.object.id != "").toBeTruthy();
            expect(createdPost.object.bodyMessage != "").toBeTruthy();
            expect(createdPost.object.payload !== undefined).toBeTruthy();
            expect(createdPost.object.getPayloadValue("test")).toBeTruthy();
            await createdPost.object.delete();

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});