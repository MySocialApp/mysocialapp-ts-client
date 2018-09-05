import {catchErrorFunc, createAccountAndGetSession, sleep} from "../common";
import {SearchUser} from "../../src/search/user";

describe("Do user search", () => {
    it("user search should return created account", async () => {
        try {
            const client = await createAccountAndGetSession();
            const userAccount = await client.account.get();
            expect(userAccount.id != "").toBeTruthy();
            expect(userAccount.displayed_name != "").toBeTruthy();

            // wait a bit to let ES index values
            await sleep(1000);

            let result = await client.user.search(new SearchUser().setFirstName(userAccount.first_name), 0);
            expect(result.matched_count).toBeGreaterThan(0);
            expect(result.results_by_type.user.data.length).toBeGreaterThan(0);
            expect(result.results_by_type.user.data[0].first_name).toEqual(userAccount.first_name);
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});