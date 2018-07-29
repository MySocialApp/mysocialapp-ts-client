import { ClientService } from "../../src/client_service";
import { Session } from "../../src/session";
export declare function banner(title: string): void;
export declare function heading(title: string): void;
export declare function createAccountAndGetSession(): Promise<Session>;
export declare function getClient(): ClientService;
export declare function sleep(duration: number): Promise<{}>;
