import { configureStore, createSlice } from '@reduxjs/toolkit'

let searched_data = createSlice({
    name : 'searched_data',
    initialState : '',
    reducers : {
        changeData(state,a){
            return  a.payload
        }
    }
})

export let { changeData } = searched_data.actions 

export default configureStore({
  reducer: { 
    searched_data : searched_data.reducer
  }
}) 