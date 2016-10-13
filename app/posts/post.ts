export interface Post {
    _id: string;
    published? : string;
    _author? : string;
    title : string;
    burmeseTitle : string;
    postImageUrl: string;
    totalLikes?: number;
    iLike? : boolean;
    engContent : string;
    __v?: number;
    burmeseContent : string
}