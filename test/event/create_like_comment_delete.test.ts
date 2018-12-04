import {catchErrorFunc, createAccountAndGetSession, getImageFile} from "../common";
import {Event} from "../../src/models/event";
import {Location} from "../../src/models/location";
import {EventMemberAccessControl} from "../../src/models/event_member_access_control";
import {TextWallMessage} from "../../src/models/text_wall_message";
import {AccessControl} from "../../src/models/access_control";
import moment = require("moment");

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            let loc = {latitude: 48.866667, longitude: 2.333333};
            let desc = "Adding social networking features to your app has never been so easy. Integrate MySocialApp with your app and engage users via realtime messaging. No more infrastructure hell, no hassle, just add it.";
            const session1 = await createAccountAndGetSession();
            const account1 = await session1.account.get();

            const session2 = await createAccountAndGetSession();
            const account2 = await session2.account.get();
            let event = new Event().setName("Let's create an event")
                .setMaxSeats(10)
                .setDescription(desc)
                .setStartDate(moment().add(1, "days"))
                .setEndDate(moment().add(2, "days"))
                .setAccessControl(EventMemberAccessControl.Public)
                .setLocation(new Location({location: loc}));
            let eventCreated = await session1.event.create(event);

            let photo = await eventCreated.updateImage(getImageFile());
            expect(photo.id != "").toBeTruthy();
            expect(photo.url != "").toBeTruthy();
            expect(photo.high_url != "").toBeTruthy();
            expect(photo.medium_url != "").toBeTruthy();
            expect(photo.small_url != "").toBeTruthy();

            let photoCover = await eventCreated.updateCoverImage(getImageFile());
            expect(photoCover.id != "").toBeTruthy();
            expect(photoCover.url != "").toBeTruthy();
            expect(photoCover.high_url != "").toBeTruthy();
            expect(photoCover.medium_url != "").toBeTruthy();
            expect(photoCover.small_url != "").toBeTruthy();

            eventCreated = await session1.event.get(eventCreated.id, false);

            expect(eventCreated.id.length).toBeGreaterThan(5);
            expect(eventCreated.event_member_access_control == EventMemberAccessControl.Public).toBeTruthy();
            expect(Math.abs(eventCreated.location.location.latitude - loc.latitude)).toBeLessThanOrEqual(1);
            expect(Math.abs(eventCreated.location.location.longitude - loc.longitude)).toBeLessThanOrEqual(1);
            expect(eventCreated.cancelled === false).toBeTruthy();
            expect(eventCreated.free_seats == 9).toBeTruthy();
            expect(eventCreated.description == desc).toBeTruthy();
            expect(eventCreated.cover_image.id != "").toBeTruthy();
            expect(eventCreated.profile_photo.id != "").toBeTruthy();

            let event2 = await session2.event.get(eventCreated.id);
            await event2.join();

            let createdMessageOnEvent = await event2.addMessage(new TextWallMessage().setMessage("I'm coming soon!").setVisibility(AccessControl.Friend));

            await event2.leave();
            await eventCreated.cancel()
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});