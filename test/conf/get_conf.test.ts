import {catchErrorFunc, getMysocialApp} from "../common";

jest.setTimeout(60000);
describe("Conf", () => {
    it("should get conf", async () => {
        try {
            let conf = await getMysocialApp().getConfig();
            expect(conf.id > 0).toBeTruthy();
        } catch (err) {
            catchErrorFunc(err);
        }
    });
});