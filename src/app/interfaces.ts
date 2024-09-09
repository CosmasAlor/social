export interface User {
    _id: string;
    name: string;
    photo: string;
}

export interface Comment {
    _id: string;
    content: string;
    commentCreator: User;
    post: string; // References the post ID
    createdAt: string; // ISO date string
}

export interface Post {
    _id: string;
    body: string;
    image: string;
    user: User;
    createdAt: string; // ISO date string
    comments: Comment[];
}