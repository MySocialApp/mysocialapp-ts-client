export class FileData {
    private data?: string;
    private file?: Blob;

    loadFromBase64(data: string): FileData {
        this.data = data;
        return this;
    }

    get blob(): Blob {
        return this.file;
    }

    /**
     * Works only with browsers, do not use with nodejs
     * @param {File} file
     * @returns {FileData}
     */
    loadFromFileBrowser(file: Blob): FileData {
        this.file = file;
        return this;
    }

    toString(): string {
        return this.data;
    }
}