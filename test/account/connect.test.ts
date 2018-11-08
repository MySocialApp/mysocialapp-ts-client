import {catchErrorFunc} from "../common";
import {MySocialApp} from "../../src/mysocialapp";

jest.setTimeout(60000);
describe("account connect & get", () => {
    it("account interaction", async () => {
        try {
            const session = await new MySocialApp().setAppId("u470584465854a728453").connect("alice.jeith@mysocialapp.io", "myverysecretpassw0rd");
            const userAccount = await session.account.get();
            expect(userAccount.id != "").toBeTruthy();
            expect(userAccount.displayed_name != "").toBeTruthy();
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});