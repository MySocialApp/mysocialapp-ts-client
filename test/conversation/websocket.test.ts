import {ErrorResponse} from "../../src/rest/error";
import {catchErrorFunc, createAccountAndGetSession, sleep} from "../common";
import {Conversation} from "../../src/models/conversation";
import {ConversationMessagePost} from "../../src/models/conversation_message_post";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const session1 = await createAccountAndGetSession();
            const account1 = await session1.account.get();
            console.info("user id 1", account1.id);

            const session2 = await createAccountAndGetSession();
            const account2 = await session2.account.get();
            console.info("user id 2", account2.id);

            session2.websocket.onMessage((notif) => {
                console.info("notif", notif);
            });

            // create conversation
            let conversation1 = await session1.conversation.create(new Conversation().setName("test").addMember(account2));
            let message1 = await conversation1.sendMessage(new ConversationMessagePost().setMessage("ping"));

            await sleep(15000);
            session2.websocket.close();

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});