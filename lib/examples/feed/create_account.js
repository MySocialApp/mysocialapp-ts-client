"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
describe("addMessage account", () => __awaiter(this, void 0, void 0, function* () {
    try {
        const client = yield common_1.createAccountAndGetSession();
        const userAccount = yield client.account.get();
        it("user has id", () => {
            expect(userAccount.id_str).toBeGreaterThan(10);
        });
        it("user has displayed_name", () => {
            expect(userAccount.displayed_name).toBeGreaterThan(10);
        });
        return;
    }
    catch (err) {
        err = err;
        console.info("error", { message: err.message, exception: err.exception, status: err.status });
    }
}));
