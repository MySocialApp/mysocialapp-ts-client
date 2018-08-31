import {ConversationMessage} from "./conversation_message";
import {FileData} from "./file";

export class ConversationMessagePost {
    private mMessage: string = "";
    private mImage: FileData = null;

    setMessage(message?: string): ConversationMessagePost {
        this.mMessage = message;
        return this;
    }

    setImage(f: FileData): ConversationMessagePost {
        this.mImage = f;
        return this;
    }

    get isMultipart(): boolean {
        return this.mImage !== null;
    }

    getConversationMessage(): ConversationMessage {
        let c = (new ConversationMessage());
        c.message = this.mMessage;
        return c
    }

    get image(): FileData {
        return this.mImage;
    }

    get message(): string {
        return this.mMessage;
    }
}