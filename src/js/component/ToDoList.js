import React, { useState } from "react";
import ToDo from "./ToDo";

//create your first component
const ToDoList = ({ toDoList }) => {
	return (
		<div>
			{toDoList.map(todo => {
				return (<ToDo todo={todo} handToggle={handToggle} handleFilter={handleFilter} />
            )
			})}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
		</div>
	);
};

export default ToDoList;
