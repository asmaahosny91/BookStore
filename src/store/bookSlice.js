import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const getBooks=createAsyncThunk('books/getBooks',async(_,thunkAPI)=>{     // action has ability to deal with side effect 
    try{
        const res=await fetch('http://localhost:3005/books');
        const data=res.json();
        return data;    
    }catch(error){
     console.log(error)
    }
});

const bookSlice = createSlice({
    name:'book',
    initialState:{books:[],isLoading:false},
    reducers:{},
    extraReducers:(builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        //thunkAPI give us types of actions as pending , fulfilled and rejected 
        builder.addCase(getBooks.pending, (state, action) => {
            state.isLoading=true;
          })
        builder.addCase(getBooks.fulfilled, (state, action) => {
          state.isLoading=false;
        })
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isLoading=false;
          })
      },
});

export default bookSlice.reducer;