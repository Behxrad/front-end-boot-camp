import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} onChange={(event) => onChange(event, "initialInvestment")} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(event) => onChange(event, "annualInvestment")} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} onChange={(event) => onChange(event, "expectedReturn")} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} onChange={(event) => onChange(event, "duration")} />
                </p>
            </div>
        </section>
    )
}