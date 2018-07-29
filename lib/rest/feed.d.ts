import { Rest } from "./rest";
import { Feed } from "../models/feed";
import { AxiosResponse } from "axios";
export declare class RestFeed extends Rest {
    get(): Promise<AxiosResponse<Feed>>;
}
