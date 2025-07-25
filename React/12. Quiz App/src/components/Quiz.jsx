import { useState } from 'react';
import QUESTIONS from '../questions.js';
import { useCallback } from 'react';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(
		selectedAnswer
	) {
		setUserAnswers((prevVal) => {
			return [...prevVal, selectedAnswer];
		});
	},
	[]);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

	if (quizIsCompleted) return <Summary userAnswers={userAnswers} />;

	return (
		<div id='quiz'>
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
}
