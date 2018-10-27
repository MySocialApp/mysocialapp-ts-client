import {catchErrorFunc, createAccountAndGetSession} from "../common";
import {Location} from "../../src/models/location";
import {TextWallMessage} from "../../src/models/text_wall_message";
import {AccessControl} from "../../src/models/access_control";
import {Group} from "../../src/models/group";
import {GroupMemberAccessControl} from "../../src/models/group_member_access_control";
import {GroupOptions} from "../../src/models/group_options";
import {BaseLocation} from "../../src/models/base_location";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const session1 = await createAccountAndGetSession();
            const account1 = await session1.account.get();

            const locationValue = {location: {latitude: 48.866667, longitude: 2.333333}};

            let group = new Group()
                .setName("Let's create a group")
                .setDescription("Adding social networking features to your app has never been so easy. Integrate MySocialApp with your app and engage users via realtime messaging. No more infrastructure hell, no hassle, just add it.")
                .setAccessControl(GroupMemberAccessControl.Public)
                .setLocation(new Location({location: {latitude: 48.866667, longitude: 2.333333}}));
            let groupCreated = await session1.group.create(group);
            expect(groupCreated.id.length).toBeGreaterThan(5);

            let groupList = await session1.group
                                .list(0, 1, new GroupOptions()
                                    .setLocation(new BaseLocation(locationValue))
                                );
            expect(groupList.length == 1).toBeTruthy();


        } catch (err) {
            catchErrorFunc(err);
        }
    });
});