import {ErrorResponse} from "../../src/rest/error";
import {createAccountAndGetSession} from "../common";

describe("create account", () => {
    it("user creation api", async () => {
        try {
            const client = await createAccountAndGetSession();
            const userAccount = await client.account.get();
            expect(userAccount.id_str).toBeGreaterThan(10);
            expect(userAccount.displayed_name).toBeGreaterThan(10);
        } catch (err) {
            expect(err).toBeNull();
            err = err as ErrorResponse;
            console.info("error", {message: err.message, exception: err.exception, status: err.status});
        }
    });
});