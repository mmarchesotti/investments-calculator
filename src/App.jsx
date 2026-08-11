import Header from '../components/Header.jsx';
import UserInput from '../components/UserInput.jsx';
import Result from '../components/Result.jsx';
import { useState } from 'react';

const INITIAL_INVESTMENT_DATA = {
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
};

function App() {
    const [investmentData, setInvestmentData] = useState(
        INITIAL_INVESTMENT_DATA,
    );

    function handleInitialInvestmentChange(event) {
        const newInitialInvestment = parseInt(event.currentTarget.value);
        const newInvestmentData = {
            ...investmentData,
            initialInvestment: newInitialInvestment,
        };
        setInvestmentData(newInvestmentData);
    }

    function handleAnnualInvestmentChange(event) {
        const newAnnualInvestment = parseInt(event.currentTarget.value);
        const newInvestmentData = {
            ...investmentData,
            annualInvestment: newAnnualInvestment,
        };
        setInvestmentData(newInvestmentData);
    }

    function handleExpectedReturnChange(event) {
        const newExpectedReturn = parseInt(event.currentTarget.value);
        const newInvestmentData = {
            ...investmentData,
            expectedReturn: newExpectedReturn,
        };
        setInvestmentData(newInvestmentData);
    }

    function handleDurationChange(event) {
        const newDuration = parseInt(event.currentTarget.value);
        const newInvestmentData = {
            ...investmentData,
            duration: newDuration,
        };
        setInvestmentData(newInvestmentData);
    }

    return (
        <main className="center">
            <Header></Header>
            <UserInput
                handleInitialInvestmentChange={handleInitialInvestmentChange}
                handleAnnualInvestmentChange={handleAnnualInvestmentChange}
                handleExpectedReturnChange={handleExpectedReturnChange}
                handleDurationChange={handleDurationChange}
                {...investmentData}
            ></UserInput>
            <Result {...investmentData}></Result>
        </main>
    );
}

export default App;
