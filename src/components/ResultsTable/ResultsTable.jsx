import { formatter } from '../../util/investment';

const dummyAnnualData = [
    {
        year: 1, // Year
        investmentValue: 10850, // Investment Value
        interestEarnedInYear: 550, // Interest (Year)
        interest: 550, // Total Interest
        annualInvestment: 10300 // Invested Capital
    },
    {
        year: 2,
        investmentValue: 11747,
        interestEarnedInYear: 597,
        interest: 1147,
        annualInvestment: 10600
    },
]

export default function ResultsTable({ results = dummyAnnualData }) {

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capitalt</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.investmentValue)}</td>
                        <td>{formatter.format(result.interestEarnedInYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.annualInvestment)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}