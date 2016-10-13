export interface User {
    _id? : number;
    name: string;
    title : string;
    email: string;
    password: string;
    userImageUrl: string;
    role : string;
    bio : string;
    __v? : number
}
