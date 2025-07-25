import { useEffect } from 'react';
import { useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		console.log("Timer called")
		const timer = setTimeout(onTimeout, timeout);

		return () => clearTimeout(timer);
	}, [timeout, onTimeout]);

	useEffect(() => {
		console.log("Interval called")
		const interval = setInterval(() => {
			setRemainingTime((prevVal) => prevVal - 100);
		}, 100);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <progress id='question-time' value={remainingTime} max={timeout} className={mode}/>;
}
