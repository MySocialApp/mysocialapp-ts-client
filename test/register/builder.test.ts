import {catchErrorFunc, getMysocialApp, randomId} from "../common";
import {Account} from "../../src/models/account";
import {Gender} from "../../src/models/gender";
import moment = require('moment');
import {apiDateFormat} from "../../src/constant";

jest.setTimeout(60000);
describe("Registration using build", () => {
    it("should create account with correct values", async () => {
        try {
            const email = randomId().toLowerCase() + "@mysocialapp.io";
            const password = randomId();
            const lastName = randomId();
            const firstName = randomId();
            const dob = moment().subtract(20, "year");
            const externalId = randomId();
            let msa = getMysocialApp();
            let account = new Account()
                .setEmail(email)
                .setPassword(password)
                .setLastName(lastName)
                .setFirstName(firstName)
                .setDateOfBirth(dob)
                .setExternalId(externalId)
                .setGender(Gender.Female);

            expect(account.email).toEqual(email);
            expect(account.password).toEqual(password);
            expect(account.last_name).toEqual(lastName);
            expect(account.first_name).toEqual(firstName);
            expect(account.external_id).toEqual(externalId);
            expect(account.date_of_birth).toEqual(dob.format(apiDateFormat));
            expect(account.gender).toEqual(Gender.Female);

            let session = await msa.createAccountFromBuilder(account);
            account = await session.account.get();

            expect(account.email).toEqual(email);
            expect(account.last_name).toEqual(lastName);
            expect(account.first_name).toEqual(firstName);
            expect(account.external_id).toEqual(externalId);
            expect(account.date_of_birth).toEqual(dob.format(apiDateFormat));
            expect(account.gender).toEqual(Gender.Female);

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});