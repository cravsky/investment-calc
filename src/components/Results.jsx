import { calculateInvestmentResults } from '../util/investment.js'
import { formatter } from '../util/investment.js'

export default function Results({ input }) {

    const results = calculateInvestmentResults(input)
    // calulating missing table data
    const initialInvestment =
        results[0].valueEndOfYear -
        results[0].interest -
        results[0].annualInvestment

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
                {results.map((annualData) => {
                    // calculating missing table data
                    const totalInterest =
                        annualData.valueEndOfYear -
                        annualData.annualInvestment * annualData.year -
                        initialInvestment;
                    // calculating missing table data
                    const totalAmountInvested = annualData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={annualData.year}>
                            <td>{annualData.year}</td>
                            <td>{formatter.format(annualData.valueEndOfYear)}</td>
                            <td>{formatter.format(annualData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>


    );
}