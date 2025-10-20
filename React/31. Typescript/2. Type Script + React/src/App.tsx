import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';
import TodosContextProvider from './store/todos-context';

function App() {
	// const [todos, setTodos] = useState<Todo[]>([]);

	// const addTodoHandler = (text: string) => {
	// 	// setTodos((prevTodos) => [...prevTodos, new Todo(text)]);
	// 	setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
	// };

	// const removeTodoHandler = (id: string) => {
	// 	setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
	// };

	// return (
	// 	<div>
	// 		<NewTodo onAddTodo={addTodoHandler} />
	// 		<Todos items={todos} onRemoveTodo={removeTodoHandler} />
	// 	</div>
	// );

	return (
		<TodosContextProvider>
			<NewTodo />
			<Todos />
		</TodosContextProvider>
	);
}

export default App;
