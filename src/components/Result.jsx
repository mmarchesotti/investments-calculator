import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Result({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}) {
    const investmentResults = calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
    });

    const tableBody = investmentResults.map((annualData) => {
        return (
            <tr key={annualData.year}>
                <td>{annualData.year}</td>
                <td>{formatter.format(annualData.valueEndOfYear, 0)}</td>
                <td>{formatter.format(annualData.interest, 0)}</td>
                <td>
                    {formatter.format(
                        annualData.valueEndOfYear - annualData.totalInvestment,
                        0,
                    )}
                </td>
                <td>{formatter.format(annualData.totalInvestment, 0)}</td>
            </tr>
        );
    });

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
            <tbody>{tableBody}</tbody>
        </table>
    );
}
