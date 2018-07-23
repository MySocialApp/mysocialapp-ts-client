import {createAccountAndGetSession} from "./common";
import {ErrorResponse} from "../../src/rest/error";

describe("create account", async () => {
    try {
        const client = await createAccountAndGetSession();
        const userAccount = await client.account.get();
        it("user has id", () => {
            expect(userAccount.id_str).toBeGreaterThan(10);
        });
        it("user has displayed_name", () => {
            expect(userAccount.displayed_name).toBeGreaterThan(10);
        });
        return
    } catch (err) {
        err = err as ErrorResponse;
        console.info("error", {message: err.message, exception: err.exception, status: err.status});
    }
});