import {Like} from "./like";
import {BaseImpl} from "./base_impl";

export interface Likable extends BaseImpl {
    getLikes(): Promise<Like[]>

    getLikersTotal(): number

    setLikersTotal(i: number)

    isLiked(): boolean

    addLike(): Promise<Like>

    deleteLike(): Promise<void>
}