import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {toggleDone,deleteTask} from '../redux/listSlice'
const TodoItem = ({ id, task, done }) => {
	const dispatch = useDispatch()

	const list =useSelector((state)=>state.list)


const checkboxclick = ()=>{
	dispatch(
		toggleDone({id:id, done:!done})
	)
	
}

const deletebtnClick=()=>{
	dispatch(deleteTask({id  : id}))
}
	return (
		<li  >
		<div className={done? 'list-style2':'list-style'}>
	    <span >
		<input type='checkbox' checked={done}  onChange={checkboxclick}></input>
			{task}
		</span>
		
		<button onClick={deletebtnClick} className='delete-btn' >Delete</button>
	    </div>
		</li>
	);
};

export default TodoItem;