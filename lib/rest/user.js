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
const rest_1 = require("./rest");
const user_1 = require("../models/user");
const users_1 = require("../models/users");
class RestUser extends rest_1.Rest {
    list(page, limited, size, location, params) {
        return __awaiter(this, void 0, void 0, function* () {
            params = params !== undefined ? params : {};
            params['page'] = page;
            params['limited'] = limited === true;
            params['size'] = size;
            if (location !== undefined) {
                params['latitude'] = location.latitude;
                params['longitude'] = location.longitude;
            }
            return this.conf.get(new users_1.Users(), "/user?" + rest_1.Rest.encodeQueryData(params));
        });
    }
    listByZone(page, limited, size, lowerLatitude, lowerLongitude, upperLatitude, upperLongitude) {
        return __awaiter(this, void 0, void 0, function* () {
            let params = {
                lower_latitude: lowerLatitude,
                lower_longitude: lowerLongitude,
                upper_latitude: upperLatitude,
                upper_longitude: upperLongitude
            };
            return this.list(page, limited, size, undefined, params);
        });
    }
    get(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.get(new user_1.User(), "/user/" + userId);
        });
    }
    getActiveUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.conf.getList(new user_1.User(), "/user/active");
        });
    }
}
exports.RestUser = RestUser;
