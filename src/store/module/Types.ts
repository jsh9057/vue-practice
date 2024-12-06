export interface Post{
    id: number;
    user: string;
    textContent: string;
    createdAt: string;
    like: number;
    comment: Comment|null;
}

export interface Comment{
    id: number,
    user: string,
    content: string,
    createdAt: string,
}

export interface User{
    id: number,
    email: string,
    userName: string,
    memo: string,
}

export interface Like{
    userId: number | null,
    postList: number[],
}