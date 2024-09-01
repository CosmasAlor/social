import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


export let login = createAsyncThunk('auth/login',async (values : {email:string , password:string})=>{
    
    try {
        let {data} = await axios.post(`https://linked-posts.routemisr.com/users/signin`, values);
        console.log(data);
        console.log('data');
        
        return data
    } catch (error:any) {
        toast.error(error.response.data.error);
        
    }
})
let authslice = createSlice({
    name: 'auth',
    initialState:{token : localStorage.getItem('token') || null, isLoading: false},
    reducers:{
        clearToken: (state) => {
            state.token = '';
            localStorage.removeItem('token'); // Optionally, remove token from local storage as well
        }
    },
    extraReducers(builder){
        builder.addCase(login.pending, (state , action)=>{
            state.isLoading = true
        }
           
        )

        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false; // Changed to a block with curly braces
            if (action.payload.message === 'success') {
              state.token = action.payload.token;
              localStorage.setItem('token', action.payload.token);
            }
          });
          
    },
})


export let authReducer = authslice.reducer;
export let { clearToken } = authslice.actions;