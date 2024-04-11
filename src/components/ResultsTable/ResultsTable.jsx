import { formatter } from '../../util/investment';
import { dummyAnnualData } from './dummyData';

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