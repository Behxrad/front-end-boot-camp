import { useState } from 'react';

import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

const QUESTION_TIME = 5000
const CHECK_TIMER = 1000
const REGISTER_ANSWER_TIMER = 2000

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
	const [answer, setAnswer] = useState({
		selectedAnswer: '',
		isCorrect: null,
	});

	let timer = QUESTION_TIME;

	if (answer.selectedAnswer) timer = CHECK_TIMER;

	if (answer.isCorrect !== null) timer = REGISTER_ANSWER_TIMER;

	function handleSelectAnswer(answer) {
		setAnswer({
			selectedAnswer: answer,
			isCorrect: null,
		});

		setTimeout(() => {
			setAnswer({
				selectedAnswer: answer,
				isCorrect: QUESTIONS[index].answers[0] === answer,
			});

			setTimeout(() => {
				onSelectAnswer(answer);
			}, REGISTER_ANSWER_TIMER);
		}, CHECK_TIMER);
	}

	let answerState = '';

	if (answer.selectedAnswer && answer.isCorrect !== null) {
		answerState = answer.isCorrect ? 'correct' : 'wrong';
	} else if (answer.selectedAnswer) {
		answerState = 'answered';
	}

	return (
		<div id='question'>
			<QuestionTimer
				key={timer}
				timeout={timer}
				onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
				mode={answerState}
			/>
			<h2>{QUESTIONS[index].text}</h2>
			<Answers
				answers={QUESTIONS[index].answers}
				selectedAnswer={answer.selectedAnswer}
				answerState={answerState}
				onSelect={handleSelectAnswer}
			/>
		</div>
	);
}
