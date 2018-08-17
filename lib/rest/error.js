"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse {
    constructor(error) {
        this.error = error;
    }
    get message() {
        return this.error.response ? this.error.response.data.message : '';
    }
    get exception() {
        return this.error.response ? this.error.response.data.exception : '';
    }
    get path() {
        return this.error.response ? this.error.response.data.path : '';
    }
    get status() {
        return this.error.response && this.error.response.data.status ? this.error.response.data.status : 0;
    }
}
exports.ErrorResponse = ErrorResponse;
