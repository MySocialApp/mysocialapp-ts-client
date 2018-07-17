import {Like} from "./like";

export interface Likable {
    getLikes(): Promise<Like[]>

    getLikersTotal(): number

    setLikersTotal(i: number)

    isLiked(): boolean

    addLike(): Promise<Like>

    deleteLike(): Promise<void>
}