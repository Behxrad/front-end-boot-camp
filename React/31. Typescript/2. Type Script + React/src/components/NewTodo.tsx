import { useContext, useRef } from 'react';

import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

// const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
// 	const todoTextInputRef = useRef<HTMLInputElement>(null);

// 	function submitHandler(event: React.FormEvent) {
// 		event.preventDefault();

// 		const enteredText = todoTextInputRef.current!.value;

// 		if (enteredText.trim().length === 0) {
// 			return;
// 		}

// 		props.onAddTodo(enteredText);
// 	}

// 	return (
// 		<form className={classes.form} onSubmit={submitHandler}>
// 			<label htmlFor='text'>Todo text</label>
// 			<input type='text' id='text' ref={todoTextInputRef} />
// 			<button>Add Todo</button>
// 		</form>
// 	);
// };

const NewTodo: React.FC = () => {
	const todosCTX = useContext(TodosContext);
    
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	function submitHandler(event: React.FormEvent) {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}

		todosCTX.addTodo(enteredText);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor='text'>Todo text</label>
			<input type='text' id='text' ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
