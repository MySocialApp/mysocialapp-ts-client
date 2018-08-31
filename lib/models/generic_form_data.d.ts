export declare class GenericFormData {
    private parts;
    private boundary;
    constructor();
    set(name: string, value: any, contentType?: string, filename?: string): void;
    append(name: string, value: any, contentType?: string, filename?: string): void;
    getHeaders(): {};
    getBoundary(): string;
    getBody(): Promise<string>;
}
