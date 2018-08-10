import {ErrorResponse} from "../../src/rest/error";
import {createAccountAndGetSession, getClient, sleep} from "../common";
import {AccessControl} from "../../src/models/access_control";
import {CommentPost} from "../../src/models/comment_post";
import {TextWallMessage} from "../../src/models/text_wall_message";
import {Conversation} from "../../src/models/conversation";
import {ConversationMessagePost} from "../../src/models/conversation_message_post";
import {Session} from "../../src/session";
import {User} from "../../src/models/user";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {

            let client = getClient();
            const session1 = new Session(client);
            let user1 = await session1.connect("rde@4tech.io", "azerty");

            let convList = await session1.conversation.list(0);

            let members = [] as User[];
            for(let user of convList[0].members) {
                if (user.id != user1.id) {
                    members.push(user);
                }
            }

            let newConv = await session1.conversation.create(new Conversation().setName("test").addMembers(members));
            let message = await newConv.sendMessage(new ConversationMessagePost().setMessage("new message in new conversation"));


        } catch (err) {
            console.info("error", err);
            err = err as ErrorResponse;
            if (err.error['response'] !== undefined) {
                console.info("body error", err.error['response']['data']);
            }
            if (err.error['config'] !== undefined) {
                console.info("headers", err.error['config']['headers']);
            }
            expect(err).toBeNull();
        }
    });
});