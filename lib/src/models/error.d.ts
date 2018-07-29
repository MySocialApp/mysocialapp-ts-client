import { AxiosError } from "axios";
export declare class ErrorResponse {
    message: string;
    timestamp: string;
    status: number;
    exception: string;
    path: string;
    constructor(error: AxiosError);
    loadData(data: {}): void;
}
