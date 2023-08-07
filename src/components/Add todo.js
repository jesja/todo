import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTask} from'../redux/listSlice'
const AddTodoForm = () => {

	const [value, setValue] = useState('');

    const dispatch = useDispatch()
	
	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTask({  task : value}
            
          
        ))
		const text= document.getElementById('field')
		text.value=''
	};

	return (
		<form onSubmit={onSubmit} className='form-style' >
			<label className='head' >To-do</label>
			<div>
			<input
			id='field'
				type='text'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			className='input-s'></input>

			<button type='submit' className='add-btn' >
				+
			</button>
			</div>
			
		</form>
	);
};

export default AddTodoForm;