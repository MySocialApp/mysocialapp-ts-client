import {catchErrorFunc, createAccountAndGetSession} from "../common";

describe("Test read notification", () => {
    it("shall get empty array", async () => {
        try {
            const session = await createAccountAndGetSession();

            let notifications = await session.clientService.notification.listUnread(0, 10);
            expect(notifications.length == 0).toBeTruthy();

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});