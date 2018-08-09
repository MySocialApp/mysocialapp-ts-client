import {ErrorResponse} from "../../src/rest/error";
import {createAccountAndGetSession} from "../common";

describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const client = await createAccountAndGetSession();
            const userAccount = await client.account.get();
            expect(userAccount.id_str).toBeGreaterThan(10);
            expect(userAccount.displayed_name).toBeGreaterThan(10);
        } catch (err) {
            err = err as ErrorResponse;
            console.info("error", {message: err.message, exception: err.exception, status: err.status, path: err.path});
            expect(err).toBeNull();
        }
    });
});