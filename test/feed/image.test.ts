import {catchErrorFunc, createAccountAndGetSession, getImageFile, sleep} from "../common";
import {AccessControl} from "../../src/models/access_control";
import {FeedPost} from "../../src/models/feed_post";
import {CommentPost} from "../../src/models/comment_post";

jest.setTimeout(60000);
describe("add image to news feed", () => {
    it("user creation api", async () => {
        try {
            const photoMessage = "Good day";
            const session = await createAccountAndGetSession();
            let post = (new FeedPost())
                .setMessage(photoMessage)
                .setVisibility(AccessControl.Friend)
                .setImage(getImageFile());

            const createdPost = await session.newsFeed.create(post);
            expect(createdPost.bodyMessage).toEqual(photoMessage);
            await sleep(1000)
            const message = "nice!";
            let comment = await createdPost.addComment(new CommentPost().setMessage(message));
            expect(message).toEqual(comment.message);

            expect(createdPost.object.id != "").toBeTruthy();
            expect(createdPost.object.type).toEqual("Photo");
            await createdPost.delete();

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});