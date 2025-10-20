import React, { useContext } from 'react';

import Todo from '../models/Todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-context';

// const Todos: React.FC<{
// 	items: Todo[];
// 	onRemoveTodo: (id: string) => void;
// }> = (props) => {
// 	return (
// 		<ul className={classes.todos}>
// 			{props.items.map((item) => (
// 				<TodoItem
// 					key={item.id}
// 					text={item.text}
// 					onRemoveTodo={(event: React.MouseEvent) =>
// 						props.onRemoveTodo(item.id)
// 					}
// 				/>
// 			))}
// 		</ul>
// 	);
// };

const Todos: React.FC = () => {
	const todosCTX = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCTX.items.map((item) => (
				<TodoItem
					key={item.id}
					text={item.text}
					onRemoveTodo={(event: React.MouseEvent) =>
						todosCTX.removeTodo(item.id)
					}
				/>
			))}
		</ul>
	);
};

export default Todos;
