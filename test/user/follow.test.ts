import {catchErrorFunc, createAccountAndGetSession} from "../common";

jest.setTimeout(60000);
describe("User Follow", () => {
    it("Do follow user", async () => {
        try {
            const session = await createAccountAndGetSession();
            const usersResult = await session.user.list(0, 10);

            const user = usersResult.users[0];
            await user.follow();
            const acc = await session.user.get(user.id);
            expect(acc.is_following).toBeTruthy();
        } catch (err) {
            catchErrorFunc(err);
        }
    });

    it("List following", async () => {
        try {
            const session = await createAccountAndGetSession();
            const following = await session.follow.listFollowings(0, 10);

            const user = following[0];
            const acc = await session.user.get(user.id);
            expect(acc.is_following).toBeTruthy();
            console.log(`${acc.id} is followed`);
        } catch (err) {
            catchErrorFunc(err);
        }
    });

    it("List user followers", async () => {
        try {
            const session = await createAccountAndGetSession();
            const usersResult = await session.user.list(0, 10);

            const user = usersResult.users[0];
            const followers = await user.listFollowers(0, 10);
            expect(followers != null).toBeTruthy();
        } catch (err) {
            catchErrorFunc(err);
        }
    });

    it("List user followings", async () => {
        try {
            const session = await createAccountAndGetSession();
            const usersResult = await session.user.list(0, 10);

            const user = usersResult.users[0];
            const followings = await user.listFollowings(0, 10);
            expect(followings != null).toBeTruthy();
        } catch (err) {
            catchErrorFunc(err);
        }
    });

    it("Do unfollow user", async () => {
        try {
            const session = await createAccountAndGetSession();
            const usersResult = await session.user.list(0, 10);

            const user = usersResult.users[0];
            await user.unfollow();
            const acc = await session.user.get(user.id);
            expect(acc.is_following == false).toBeTruthy();
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});