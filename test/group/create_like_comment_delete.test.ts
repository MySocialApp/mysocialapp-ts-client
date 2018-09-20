import {catchErrorFunc, createAccountAndGetSession} from "../common";
import {Location} from "../../src/models/location";
import {TextWallMessage} from "../../src/models/text_wall_message";
import {AccessControl} from "../../src/models/access_control";
import {Group} from "../../src/models/group";
import {GroupMemberAccessControl} from "../../src/models/group_member_access_control";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const session1 = await createAccountAndGetSession();
            const account1 = await session1.account.get();

            const session2 = await createAccountAndGetSession();
            const account2 = await session2.account.get();

            let group = new Group()
                .setName("Let's create a group")
                .setDescription("Adding social networking features to your app has never been so easy. Integrate MySocialApp with your app and engage users via realtime messaging. No more infrastructure hell, no hassle, just add it.")
                .setAccessControl(GroupMemberAccessControl.Public)
                .setLocation(new Location({location: {latitude: 48.866667, longitude: 2.333333}}));
            let groupCreated = await session1.group.create(group);
            expect(groupCreated.id.length).toBeGreaterThan(5);

            let group2 = await session2.group.get(groupCreated.id);
            await group2.join();

            let createdMessageOnEvent = await group2.addMessage(new TextWallMessage().setMessage("I'm coming soon!").setVisibility(AccessControl.Friend));


            await group2.leave();

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});