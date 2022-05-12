import React, { useState } from "react";

//create your first component
const ToDo = ({ todo }) => {
	return <div className={todo.complete ? "strike" : ""}>{todo.task}</div>;
};

export default ToDo;
