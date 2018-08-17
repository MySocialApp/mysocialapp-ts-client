import {catchErrorFunc, createAccountAndGetSession, sleep} from "../common";
import {AccessControl} from "../../src/models/access_control";
import {CommentPost} from "../../src/models/comment_post";
import {TextWallMessage} from "../../src/models/text_wall_message";

jest.setTimeout(60000);
describe("Test feed generator function", () => {
    it("should iterate", async () => {
        try {
            const session = await createAccountAndGetSession();
            const account = await session.account.get();
            let count = 0;
            for await (const feed of session.newsFeed.stream()) {
                console.info("feed post "+ ++count, feed.object.created_date);
            }

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});