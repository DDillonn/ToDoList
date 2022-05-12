import React, { useState } from "react";
import Header from "./Header";
import data from "./data.json";
import ToDoList from "./ToDoList";

//create your first component

function App() {
	const [toDoList, setToDoList] = useState(data);

	const handleToggle = (id) => {
		let mapped = toDoList.map((task) => {
			return task.id == id
				? { ...task, complete: !task.complete }
				: { ...task };
		});
		setToDoList(mapped);
	};

	const handleFilter = () => {
		let filtered = toDoList.filter((tasks) => {
			return filtered.complete;
		});
		setToDoList(filtered);
	};

	return (
		<div className="App">
			<Header />
			<ToDoList toDoList={toDoList} />
		</div>
	);
}

export default App;
