import { TagEntityAbstract } from "./tag_entity_abstract";
export declare class URLTag extends TagEntityAbstract {
    original_url: string;
    original_url_to_display: string;
    original_host_url: string;
    short_url: string;
    title: string;
    description: string;
    preview_url: string;
    start_index: number;
    end_index: number;
    text: string;
    readonly text_shown: string;
    indices: number[];
}
