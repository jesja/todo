import React from 'react';
import TodoItem from './todoItem';
import { useSelector } from 'react-redux';
const TodoList = () => {

	
    const list =useSelector((state)=>state.list)


	return (
		<ul >
			{list.map((list) => (
				<TodoItem id={list.id} task={list.task} done={list.done} />
			))}
		</ul>
	);
};

export default TodoList;
