import React, { useState } from "react";
import ToDo from "./ToDo";

//create your first component
const ToDoList = ({ toDoList }) => {
	return (
		<div>
			{toDoList.map((todo) => {
				return <ToDo todo={todo} />;
			})}
		</div>
	);
};

export default ToDoList;
