import { createSlice } from '@reduxjs/toolkit';



const listSlice = createSlice({
    name: 'list',
    initialState: [],

    reducers:{
        addTask:(state,action)=>{
            const newtask ={
                id:Date.now(),
                task: action.payload.task,
                done:false
            }
            state.push(newtask)
        },
        toggleDone:(state,action)=>{
            const index = state.findIndex(
                (todo)=>todo.id===action.payload.id
            )
            state[index].done = action.payload.done
        },
        deleteTask:(state,action)=>{
            return state.filter((list)=> list.id !== action.payload.id )
        }

    }
  });
  
  
  export const { addTask, toggleDone, deleteTask} = listSlice.actions
  export default listSlice.reducer