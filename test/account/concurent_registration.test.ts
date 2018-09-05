import {catchErrorFunc, randomId, sleep,} from "../common";
import {MySocialApp} from "../../src/mysocialapp";
import {Session} from "../../src/session";

describe("addMessage account", () => {
    it("user creation api", async () => {
        try {
            let email = randomId() + "@mysocialapp.io";
            let password = randomId();
            let firstName = randomId();
            let appId = 'u470584465854a728453';

            console.info("email", email);
            console.info("firstName", firstName);


            let firstId: string;
            let requestsToDo = 10;
            let printSession = async function (session: Session){
                let account = await session.account.get(true);
                if(firstId === undefined ) {
                    firstId = account.id_str;
                }
                expect(firstId).toEqual(account.id_str);
                requestsToDo--;
            };

            for (let i = 0; i < requestsToDo; i++) {
                new MySocialApp().setAppId(appId).createAccount(email, password, firstName).then(printSession);
            }
            while (requestsToDo > 0) {
                await sleep(1000);
            }

        } catch (err) {
            catchErrorFunc(err);
        }
    });
});

