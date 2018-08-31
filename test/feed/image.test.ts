import {catchErrorFunc, createAccountAndGetSession, getImageFile, sleep} from "../common";
import {AccessControl} from "../../src/models/access_control";
import {FeedPost} from "../../src/models/feed_post";

jest.setTimeout(60000);
describe("add image to news feed", () => {
    it("user creation api", async () => {
        try {

            const session = await createAccountAndGetSession();
            let post = (new FeedPost())
                .setMessage("Good day")
                .setVisibility(AccessControl.Friend)
                .setImage(getImageFile());

            const createdPost = await session.newsFeed.create(post);
            expect(createdPost.object.id != "").toBeTruthy();
            expect(createdPost.object.displayed_name != "").toBeTruthy();
            expect(createdPost.object.displayed_photo != undefined).toBeTruthy();
            console.log(createdPost.object.displayed_photo);
            sleep(200);


        } catch (err) {
            catchErrorFunc(err);
        }
    });
});