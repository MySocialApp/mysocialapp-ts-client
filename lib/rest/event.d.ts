import { Rest } from "./rest";
import { SimpleLocation } from "../models/simple_location";
import { Event } from "../models/event";
import { CustomField } from "../models/custom_field";
import { EventMember } from "../models/event_member";
import { Photo } from "../models/photo";
import { AccessControl } from "../models/access_control";
import { Feed } from "../models/feed";
import { TagEntities } from "../models/tag_entities";
import { FileData } from "../models/file";
export declare class RestEvent extends Rest {
    list(page: number, limited?: boolean, size?: number, location?: SimpleLocation, params?: {}): Promise<Event[]>;
    listByZone(page: number, limited: boolean, size: number, lowerLatitude: number, lowerLongitude: number, upperLatitude: number, upperLongitude: number): Promise<Event[]>;
    get(id: string): Promise<Event>;
    create(event: Event): Promise<Event>;
    update(event: Event): Promise<Event>;
    cancel(id: string): Promise<void>;
    getCustomFields(): Promise<CustomField[]>;
    getEventCustomFields(id: string): Promise<CustomField[]>;
    getMembers(id: string): Promise<EventMember[]>;
    join(eventId: string): Promise<EventMember>;
    leave(eventId: string): Promise<void>;
    getPhotos(eventId: string, page?: number): Promise<Photo[]>;
    addPhoto(eventId: string, photo: FileData, message?: string, accessControl?: AccessControl, tagEntities?: TagEntities): Promise<Feed>;
    getProfilePhoto(eventId: string): Promise<Photo>;
    updateProfilePhoto(eventId: string, photo: FileData): Promise<Photo>;
    getProfileCoverPhoto(eventId: string): Promise<Photo>;
    updateProfileCoverPhoto(eventId: string, photo: FileData): Promise<Photo>;
}
