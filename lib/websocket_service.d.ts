import { Session } from "./session";
export declare class WebsocketService {
    private session;
    private client;
    private connection;
    private listeners;
    constructor(session: Session);
    connect(): WebsocketService;
    close(): void;
    private send;
    onMessage(callback: any): void;
}
