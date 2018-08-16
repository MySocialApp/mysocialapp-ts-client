import {catchErrorFunc, createAccountAndGetSession, fillCustomFields, sleep} from "../common";
import {Model} from "../../src/models/model";

describe("account custom field", () => {
    it("set custom field", async () => {
        try {
            const client = await createAccountAndGetSession();
            const userAccount = await client.account.get();

            userAccount.custom_fields = fillCustomFields(userAccount.custom_fields);
            let account = await userAccount.update();
            await sleep(200);
            for(let field of account.custom_fields) {
                expect(field.data != undefined).toBeTruthy();
                expect(field.data && field.data.field_id && field.data.field_id.length).toBeTruthy();
            }
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});