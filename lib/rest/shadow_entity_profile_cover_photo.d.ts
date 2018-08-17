import { Rest } from "./rest";
import { Photo } from "../models/photo";
export declare class RestShadowEntityProfileCoverPhoto extends Rest {
    get(id: string): Promise<Photo>;
    set(id: string, photo: File): Promise<Photo>;
}
