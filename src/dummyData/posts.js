import imagePath from "../constants/imagePath";
import { Users } from "./users";

export const POSTS = [
    {
        imageUrl: imagePath.user,
        user : Users[0].user,
        likes: 900,
        profile_picture: Users[0].image,
        caption:"blah blah blah",
        comments: [
            {
                user: "the_begginner",
                comment: "this is very nice post"
            },
            {
                user: "btb",
                comment: "this is very nice post"
            },
        ]
    },
    {
        imageUrl: imagePath.user,
        user : Users[1].user,
        likes: 900,
        profile_picture: Users[1].image,
        caption:"blah blah blah",
        comments: [
            {
                user: "the_begginner",
                comment: "this is very nice post"
            },
            {
                user: "btb",
                comment: "this is very nice post"
            },
        ]
    },
    {
        imageUrl: imagePath.user,
        user : Users[2].user,
        likes: 900,
        profile_picture: Users[2].image,
        caption:"blah blah blah",
        comments: [
            {
                user: "the_begginner",
                comment: "this is very nice post"
            },
            {
                user: "btb",
                comment: "this is very nice post"
            },
        ]
    },

]