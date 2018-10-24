import {catchErrorFunc, createAccountAndGetSession, sleep} from "../common";
import {Conversation} from "../../src/models/conversation";
import {ConversationMessagePost} from "../../src/models/conversation_message_post";
import {Notification} from "../../src/models/notification";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const session1 = await createAccountAndGetSession();
            const account1 = await session1.account.get();

            const session2 = await createAccountAndGetSession();
            const account2 = await session2.account.get();

            session2.websocket.onNotification((notif: Notification) => {
                expect(notif.created_date != "").toBeTruthy();
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