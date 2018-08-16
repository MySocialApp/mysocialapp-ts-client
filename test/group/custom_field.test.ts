import {catchErrorFunc, createAccountAndGetSession, fillCustomFields} from "../common";
import {EventMemberAccessControl} from "../../src/models/event_member_access_control";
import {Location} from "../../src/models/location";
import {Event} from "../../src/models/event";
import moment = require("moment");
import {Group} from "../../src/models/group";
import {GroupMemberAccessControl} from "../../src/models/group_member_access_control";

describe("group custom field", () => {
    it("set custom field", async () => {
        try {
            const session = await createAccountAndGetSession();

            let group = new Group()
                .setName("Let's create a group")
                .setDescription("Adding social networking features to your app has never been so easy. Integrate MySocialApp with your app and engage users via realtime messaging. No more infrastructure hell, no hassle, just add it.")
                .setAccessControl(GroupMemberAccessControl.Public)
                .setLocation(new Location({location: {latitude: 48.866667, longitude: 2.333333}}));
            let groupCreated = await session.group.create(group);

            groupCreated.custom_fields = fillCustomFields(groupCreated.custom_fields);
            let groupUpdated = await groupCreated.update();

            for(let field of groupUpdated.custom_fields) {
                expect(field.data != undefined).toBeTruthy();
                expect(field.data && field.data.field_id && field.data.field_id.length).toBeTruthy();
            }
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});