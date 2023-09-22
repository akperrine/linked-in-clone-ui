export interface PostType{
    _id : string,
    email: string,
    content: string,
    timestamp: Date,
    likes: number,
    comments: string[]
}
export interface PostProps {
    postData: PostType;
}