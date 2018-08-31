export declare class FileData {
    private data?;
    private file?;
    loadFromBase64(data: string): FileData;
    readonly blob: Blob;
    /**
     * Works only with browsers, do not use with nodejs
     * @param {File} file
     * @returns {FileData}
     */
    loadFromFileBrowser(file: Blob): FileData;
    toString(): string;
}
