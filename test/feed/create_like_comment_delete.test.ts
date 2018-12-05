import {catchErrorFunc, createAccountAndGetSession, getImageFile, sleep} from "../common";
import {AccessControl} from "../../src/models/access_control";
import {CommentPost} from "../../src/models/comment_post";
import {FeedPost} from "../../src/models/feed_post";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            let post = (new FeedPost()).setMessage("Good").setVisibility(AccessControl.Friend);

            const session = await createAccountAndGetSession();
            const account = await session.account.get();
            let precreatedPost = await session.newsFeed.create(post);
            expect(precreatedPost.object.id != "").toBeTruthy();
            expect(precreatedPost.object.bodyMessage != "").toBeTruthy();
            expect(precreatedPost.object.access_control == AccessControl.Friend);

            const createdPost = await precreatedPost.setBodyMessage("Good day").save();
            expect(createdPost.id === precreatedPost.id);
            expect(createdPost.bodyMessage === "Good day");

            let like = await createdPost.object.addLike();
            expect(like.id != "").toBeTruthy();

            let comment = await createdPost.object.addComment((new CommentPost()).setMessage("hello world"));
            expect(comment.message == "hello world");
            expect(comment.id != "").toBeTruthy();

            let commentPhoto = await createdPost.object.addComment(new CommentPost().setMessage("my photo").setImage(getImageFile()));
            expect(commentPhoto.message == "my photo").toBeTruthy();
            console.log(commentPhoto);
            expect(commentPhoto.id != "").toBeTruthy();
            expect(commentPhoto.photo.id != "").toBeTruthy();
            expect(commentPhoto.photo.small_url != "").toBeTruthy();
            expect(commentPhoto.photo.high_url != "").toBeTruthy();
            expect(commentPhoto.photo.medium_url != "").toBeTruthy();
            expect(commentPhoto.photo.body_image_url != "").toBeTruthy();
            expect(commentPhoto.photo.target != undefined).toBeTruthy();


            await sleep(1000);
            let likes = await createdPost.getLikes();
            expect(likes.length).toBeGreaterThan(0);
            expect(likes[0].id != "").toBeTruthy();
            //expect(likes[0].created_date != "").toBeTruthy();
            expect(likes[0].owner.id == account.id).toBeTruthy();

            let comments = await createdPost.getComments();
            expect(comments.length).toBeGreaterThan(0);
            expect(comments[0].parent.id == createdPost.id).toBeTruthy();

            comments[0].message = "new message";
            let updatedComment = await comments[0].save();
            expect(updatedComment.message == "new message");

            let likedPost = await session.newsFeed.get(createdPost.id);
            expect(likedPost.object.isLiked()).toBeTruthy();

            await createdPost.object.delete();

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});