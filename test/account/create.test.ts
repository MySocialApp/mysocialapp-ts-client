import {ErrorResponse} from "../../src/rest/error";
import {createAccountAndGetSession} from "../common";

describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const client = await createAccountAndGetSession();
            const userAccount = await client.account.get();
            expect(userAccount.id != "").toBeTruthy();
            expect(userAccount.displayed_name != "").toBeTruthy();
        } catch (err) {
            err = err as ErrorResponse;
            console.info("error", {message: err.message, exception: err.exception, status: err.status, path: err.path});
            expect(err).toBeNull();
        }
    });
});