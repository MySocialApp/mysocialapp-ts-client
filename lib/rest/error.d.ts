import { AxiosError } from "axios";
export declare class ErrorResponse {
    private error;
    constructor(error: AxiosError);
    readonly message: string;
    readonly exception: string;
    readonly path: string;
    readonly status: number;
}
