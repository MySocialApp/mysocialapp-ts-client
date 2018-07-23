import {AxiosError} from "axios";

export class ErrorResponse {
    private error: AxiosError;

    constructor(error: AxiosError) {
        this.error = error;
    }

    get message(): string {
        return this.error.response ? this.error.response.data.message : '';
    }

    get exception(): string {
        return this.error.response ? this.error.response.data.exception : '';
    }

    get path(): string {
        return this.error.response ? this.error.response.data.path : '';
    }

    get status(): number {
        return this.error.response && this.error.response.data.status ? this.error.response.data.status : 0;
    }
}