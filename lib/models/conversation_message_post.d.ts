import { ConversationMessage } from "./conversation_message";
export declare class ConversationMessagePost {
    private mMessage;
    private mImage;
    setMessage(message?: string): ConversationMessagePost;
    setImage(f: File): ConversationMessagePost;
    readonly isMultipart: boolean;
    getConversationMessage(): ConversationMessage;
    readonly image: File;
    readonly message: string;
}
