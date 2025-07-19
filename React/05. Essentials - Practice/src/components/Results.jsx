import { formatter, calculateInvestmentResults } from '../util/investment.js'

export default function Results({ userInput }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {calculateInvestmentResults(userInput).map((value, i, arr) => {
                    const totalInterest =
                        value.valueEndOfYear -
                        value.annualInvestment * value.year -
                        (arr[0].valueEndOfYear - arr[0].interest - arr[0].annualInvestment);
                    const totalAmountInvested = value.valueEndOfYear - totalInterest;

                    return (<tr key={value.year}>
                        <td>{value.year}</td>
                        <td>{formatter.format(value.valueEndOfYear)}</td>
                        <td>{formatter.format(value.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}