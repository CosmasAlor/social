import { Post } from "@/app/interfaces";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch posts
export const getPost = createAsyncThunk('posts/getPost', async (id : string) => {
    const { data } = await axios.get(`https://linked-posts.routemisr.com/posts/${id}`, {
        headers: {
            token: localStorage.getItem('token') || ''
        }
    });
    console.log(data);
    return data.post as Post[]; // Assuming 'posts' is an array of Post objects
});


export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    const { data } = await axios.get(`https://linked-posts.routemisr.com/posts?limit=20`, {
        headers: {
            token: localStorage.getItem('token') || ''
        }
    });
    console.log(data);
    return data.posts as Post[]; // Assuming 'posts' is an array of Post objects
});

// Initial state with proper typing
const initialState: { posts: Post[], isLoading: boolean , post: Post | null } = { posts: [], isLoading: true, post:null};

// Redux slice
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        });

        builder.addCase(getPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.post = action.payload;
        });
    },
});

// Export the reducer to be used in the store
export const postsReducer = postsSlice.reducer;
