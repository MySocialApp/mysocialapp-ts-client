import {catchErrorFunc, createAccountAndGetSession} from "../common";
import {Event} from "../../src/models/event";
import {Location} from "../../src/models/location";
import {EventMemberAccessControl} from "../../src/models/event_member_access_control";
import moment = require("moment");

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const session1 = await createAccountAndGetSession();
            const account1 = await session1.account.get();

            const session2 = await createAccountAndGetSession();
            const account2 = await session2.account.get();
            let event = new Event().setName("Let's create an event")
                .setMaxSeats(10)
                .setDescription("Adding social networking features to your app has never been so easy. Integrate MySocialApp with your app and engage users via realtime messaging. No more infrastructure hell, no hassle, just add it.")
                .setStartDate(moment().add(1, "days"))
                .setEndDate(moment().add(2, "days"))
                .setAccessControl(EventMemberAccessControl.Public)
                .setLocation(new Location({location: {latitude: 48.866667, longitude: 2.333333}}));
            let eventCreated = await session1.event.create(event);
            expect(eventCreated.id.length).toBeGreaterThan(5);


        } catch (err) {
            catchErrorFunc(err);
        }
    });
});