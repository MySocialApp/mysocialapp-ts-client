import {catchErrorFunc, createAccountAndGetSession, getImageFile, sleep} from "../common";
import {Location} from "../../src/models/location";
import {TextWallMessage} from "../../src/models/text_wall_message";
import {AccessControl} from "../../src/models/access_control";
import {Group} from "../../src/models/group";
import {GroupMemberAccessControl} from "../../src/models/group_member_access_control";
import {FeedPost} from "../../src/models/feed_post";
import {Photo} from "../../src/models/photo";
import {CommentPost} from "../../src/models/comment_post";

jest.setTimeout(60000);
describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            const session1 = await createAccountAndGetSession();
            const account1 = await session1.account.get();

            const session2 = await createAccountAndGetSession();
            const account2 = await session2.account.get();
            const name = "Let's create a group";
            const desc = "Adding social networking features to your app has never been so easy. Integrate MySocialApp with your app and engage users via realtime messaging. No more infrastructure hell, no hassle, just add it.";

            let group = new Group()
                .setName(name)
                .setDescription(desc)
                .setAccessControl(GroupMemberAccessControl.Public)
                .setLocation(new Location({location: {latitude: 48.866667, longitude: 2.333333}}));

            let groupCreated = await session1.group.create(group);
            expect(groupCreated.id.length).toBeGreaterThan(5);

            let profilePhoto = await groupCreated.updateImage(getImageFile());
            expect(profilePhoto.id.length).toBeGreaterThan(5);
            expect(profilePhoto.url != "").toBeTruthy();
            expect(profilePhoto.small_url != "").toBeTruthy();
            expect(profilePhoto.medium_url != "").toBeTruthy();
            expect(profilePhoto.high_url != "").toBeTruthy();
            expect(profilePhoto.body_image_url != "").toBeTruthy();

            let coverPhoto = await groupCreated.updateCoverImage(getImageFile());
            expect(coverPhoto.id.length).toBeGreaterThan(5);
            expect(coverPhoto.url != "").toBeTruthy();
            expect(coverPhoto.small_url != "").toBeTruthy();
            expect(coverPhoto.medium_url != "").toBeTruthy();
            expect(coverPhoto.high_url != "").toBeTruthy();
            expect(coverPhoto.body_image_url != "").toBeTruthy();

            sleep(1000);
            let group2 = await session2.group.get(groupCreated.id, false);
            expect(group2.id.length).toBeGreaterThan(5);
            expect(group2.members.length).toBe(1);
            expect(group2.profile_photo.id.length).toBeGreaterThan(5);
            expect(group2.profile_cover_photo.id.length).toBeGreaterThan(5);
            expect(group2.group_member_access_control).toBe(GroupMemberAccessControl.Public);
            expect(group2.description).toBe(desc);
            expect(group2.member).toBe(false);
            expect(group2.total_members).toBe(1);
            expect(group2.name).toBe(name);
            await group2.join();

            sleep(500);

            let limitedGroup = await session2.group.get(groupCreated.id, true);
            let members = await limitedGroup.getMembers();
            expect(members.length).toBe(2);
            expect(members[0].user.id.length).toBeGreaterThan(5);
            expect(members[0].group.id.length).toBeGreaterThan(5);
            expect(members[0].created_date != "").toBeTruthy();
            expect(members[0].updated_date != "").toBeTruthy();

            let comment = "I'm coming soon!";
            let createdMessageOnEvent = await group2.addMessage(new TextWallMessage().setMessage(comment).setVisibility(AccessControl.Friend));
            expect(createdMessageOnEvent.id.length).toBeGreaterThan(5);
            expect(createdMessageOnEvent.object.bodyMessage).toBe(comment);
            expect(createdMessageOnEvent.access_control).toBe(AccessControl.Friend);

            let createdPhotoMessageOnEvent = await group2.createFeedPost(new FeedPost().setImage(getImageFile()).setMessage(comment).setVisibility(AccessControl.Public));
            expect(createdPhotoMessageOnEvent.id.length).toBeGreaterThan(5);
            expect(createdPhotoMessageOnEvent.object.bodyMessage).toBe(comment);
            expect(createdPhotoMessageOnEvent.access_control).toBe(AccessControl.Public);
            expect(createdPhotoMessageOnEvent.object.body_image_url != "").toBeTruthy();

            let photoPost = createdPhotoMessageOnEvent.object as Photo;
            expect(photoPost.id.length).toBeGreaterThan(5);
            expect(photoPost.url != "").toBeTruthy();
            expect(photoPost.high_url != "").toBeTruthy();
            expect(photoPost.visible).toBeTruthy();
            expect(photoPost.body_image_url != "").toBeTruthy();

            await group2.leave();

            const commentPhoto = await photoPost.addComment(new CommentPost().setImage(getImageFile()).setMessage(comment));
            expect(commentPhoto.id.length).toBeGreaterThan(5);
            expect(commentPhoto.photo.id.length).toBeGreaterThan(5);
            expect(commentPhoto.photo.url != "").toBeTruthy();
            expect(commentPhoto.photo.high_url != "").toBeTruthy();
            expect(commentPhoto.message).toBe(comment);

            await createdMessageOnEvent.delete();
            await createdPhotoMessageOnEvent.delete();

            sleep(500);

            let listPost = await group2.listNewsFeed(0, 10);
            expect(listPost.length).toBe(0);

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});