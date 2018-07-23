import {ConversationMessage} from "./conversation_message";

export class ConversationMessagePost {
    private mMessage: string = "";
    private mImage: File = null;

    setMessage(message?: string): ConversationMessagePost {
        this.mMessage = message;
        return this;
    }

    setImage(f: File): ConversationMessagePost {
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

    get image(): File {
        return this.mImage;
    }

    get message(): string {
        return this.mMessage;
    }
}