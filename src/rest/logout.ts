import {Rest} from "./rest";
import {AxiosError} from "axios";
import {ErrorResponse} from "./error";


export class RestLogout extends Rest {

    async do(): Promise<void> {
        try {
            await this.conf.httpClient.post<void>('/logout');
            return;
        } catch(err) {
            throw new ErrorResponse(err);
        }
    }
}
