import {catchErrorFunc, getMysocialApp, randomId} from "../common";
import {Account} from "../../src/models/account";
import {apiDateFormat} from "../../src/constant";
import {CustomFieldType} from "../../src/models/custom_field";
import moment = require('moment');

jest.setTimeout(60000);
describe("Registration with tag entities", () => {
    it("should create account with correct tag entities", async () => {
        try {
            const email = randomId().toLowerCase() + "@mysocialapp.io";
            const password = randomId();
            const lastName = randomId();
            let msa = getMysocialApp();
            let account = new Account()
                .setEmail(email)
                .setPassword(password)
                .setFirstName(lastName);

            let session = await msa.createAccountFromBuilder(account);
            account = await session.account.get();

            let mapValue = {};
            for (let field of account.custom_fields) {
                switch (field.field_type) {
                    case CustomFieldType.InputNumber:
                        field.value = 123;
                        break;
                    case CustomFieldType.InputDate:
                        field.value = moment().format(apiDateFormat);
                        break;
                    case CustomFieldType.InputSelect:
                    case CustomFieldType.InputCheckbox:
                        // TODO implem test here
                        break;
                    default:
                        field.value = randomId();
                }
                mapValue[field.field.id] = field.value;
            }

            account = await account.update();

            for (let field of account.custom_fields) {
                if (mapValue[field.field.id]) {
                    expect(field.value).toEqual(mapValue[field.field.id]);
                }
            }

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});