import {catchErrorFunc, createAccountAndGetSession} from "../common";

jest.setTimeout(60000);
describe("Test feed generator function", () => {
    it("should iterate", async () => {
        try {
            const session = await createAccountAndGetSession();

            let count = 0;
            for await (const f of session.group.stream()) {
                expect(f.id.length).toBeGreaterThan(5);
                if (count++ > 15) {
                    break;
                }
            }

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});