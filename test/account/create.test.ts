import {catchErrorFunc, createAccountAndGetSession} from "../common";

describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const client = await createAccountAndGetSession();
            const userAccount = await client.account.get();
            expect(userAccount.id != "").toBeTruthy();
            expect(userAccount.displayed_name != "").toBeTruthy();
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});