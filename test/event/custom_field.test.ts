import {catchErrorFunc, createAccountAndGetSession, fillCustomFields} from "../common";
import {EventMemberAccessControl} from "../../src/models/event_member_access_control";
import {Location} from "../../src/models/location";
import {Event} from "../../src/models/event";
import moment = require("moment");

jest.setTimeout(60000);
describe("event custom field", () => {
    it("set custom field", async () => {
        try {
            const session = await createAccountAndGetSession();

            let event = new Event().setName("Let's create an event")
                .setMaxSeats(10)
                .setDescription("Adding social networking features to your app has never been so easy. Integrate MySocialApp with your app and engage users via realtime messaging. No more infrastructure hell, no hassle, just add it.")
                .setStartDate(moment().add(1, "days"))
                .setEndDate(moment().add(2, "days"))
                .setAccessControl(EventMemberAccessControl.Public)
                .setLocation(new Location({location: {latitude: 48.866667, longitude: 2.333333}}));
            let eventCreated = await session.event.create(event);

            eventCreated.custom_fields = fillCustomFields(eventCreated.custom_fields);
            let eventUpdated = await eventCreated.update();

            for(let field of eventUpdated.custom_fields) {
                expect(field.data != undefined).toBeTruthy();
                expect(field.data && field.data.field_id && field.data.field_id.length).toBeTruthy();
            }
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});