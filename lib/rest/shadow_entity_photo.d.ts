import { Rest } from "./rest";
import { Feed } from "../models/feed";
import { Photo } from "../models/photo";
import { TagEntities } from "../models/tag_entities";
import { AccessControl } from "../models/access_control";
import { FileData } from "../models/file";
export declare class RestShadowEntityPhoto extends Rest {
    list(id: string, page: number, size?: number): Promise<Photo[]>;
    create(id: string, photo: FileData, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities): Promise<Feed>;
}
