import {ErrorResponse} from "../../src/rest/error";
import {createAccountAndGetSession, sleep} from "../common";
import {AccessControl} from "../../src/models/access_control";
import { CommentPost } from "../../src/models/comment_post";
import {TextWallMessage} from "../../src/models/text_wall_message";
jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            let post = (new TextWallMessage()).setMessage("Good day").setVisibility(AccessControl.Friend);

            const session = await createAccountAndGetSession();
            const account = await session.account.get();
            const createdPost = await session.feed.sendWallPost(post);
            console.info('created post', createdPost);
            expect(createdPost.object.id_str != "").toBeTruthy();
            expect(createdPost.object.displayed_name != "").toBeTruthy();

            await sleep(1000);

            let like = await createdPost.object.addLike();
            expect(like.id_str != "").toBeTruthy();
            
            let comment = await createdPost.object.addComment((new CommentPost()).setMessage("hello world"));
            expect(comment.message == "hello world");

            await createdPost.object.delete();
            
        } catch (err) {
            console.info("error", err);
            err = err as ErrorResponse;
            console.info("body error", err.error['response']['data']);
            console.info("headers", err.error['config']['headers']);
            expect(err).toBeNull();
        }
    });
});