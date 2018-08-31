import { ConversationMessage } from "./conversation_message";
import { FileData } from "./file";
export declare class ConversationMessagePost {
    private mMessage;
    private mImage;
    setMessage(message?: string): ConversationMessagePost;
    setImage(f: FileData): ConversationMessagePost;
    readonly isMultipart: boolean;
    getConversationMessage(): ConversationMessage;
    readonly image: FileData;
    readonly message: string;
}
