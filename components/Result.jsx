import { calculateInvestmentResults, formatter } from '../src/util/investment';

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
                    <td>Year</td>
                    <td>Investment Value</td>
                    <td>Interest (Year)</td>
                    <td>Total Interest</td>
                    <td>Invested Capital</td>
                </tr>
            </thead>
            <tbody>{tableBody}</tbody>
        </table>
    );
}
