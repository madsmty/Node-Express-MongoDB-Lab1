    export interface Posts {
       userId: string,
       name: string, // firstname + lastName
       email: string, // userEmail
       postId: string, // postId
       title: string ,
       body: string,
    }

    export interface PostsArray{
        data: Posts[];
    }; 
    