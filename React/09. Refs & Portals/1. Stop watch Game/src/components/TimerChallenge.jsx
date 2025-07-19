import { useState, useRef } from 'react'
import ResultModal from './ResultModal'

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()

    const [remainingTime, setRemainingTime] = useState(targetTime * 1000)
    const isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000

    if (remainingTime <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    function handleReset() {
        setRemainingTime(targetTime * 1000)
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 10)
        }, 10)
    }

    function handleStop() {
        clearInterval(timer.current)
        dialog.current.open()
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} remainingTime={remainingTime} onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ""}</p>
                <p>
                    <button onClick={isTimerActive ? handleStop : handleStart}>{isTimerActive ? "Stop" : "Start"} Challenge</button>
                </p>
                <p className={isTimerActive ? "active" : undefined}>
                    {isTimerActive ? "Time is running ..." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}