    export interface Posts {
       userId: number,
       name: string, // firstname + lastName
       email: string, // userEmail
       postId: number, // postId
       title: string ,
       body: string,
    }

    export interface PostsArray{
        data: Posts[];
    }; 
    