import {TagEntityAbstract} from "./tag_entity_abstract";

export class URLTag extends TagEntityAbstract {
    original_url: string;
    original_url_to_display: string;
    original_host_url: string;
    short_url: string;
    title: string;
    description: string;
    preview_url: string;
    start_index: number;
    end_index: number;

    get text(): string {
        return this.original_url;
    }

    set text(t: string) {
        this.original_url = t;
    }

    get text_shown(): string {
        return this.original_url_to_display;
    }

    get indices(): number[] {
        return [this.start_index, this.end_index];
    }

    set indices(indices: number[]) {
        if (!indices) {
            return
        }

        if (indices.length == 2) {
            this.start_index = indices[0];
            this.end_index = indices[1];
            return
        }
    }
}