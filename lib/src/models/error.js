"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
class ErrorResponse {
    constructor(error) {
        this.message = "";
        this.timestamp = "";
        this.status = 0;
        this.exception = "";
        this.path = "";
        if (error.response.data) {
            this.loadData(error.response.data);
        }
    }
    loadData(data) {
        if (data !== undefined) {
            _.forOwn(data, (value, key) => {
                this[key] = value;
            });
        }
    }
}
exports.ErrorResponse = ErrorResponse;
