import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
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

    function handleChange(inputIdentifier, event) {
        const newValue = parseInt(event.currentTarget.value);
        setInvestmentData((investmentData) => {
            return {
                ...investmentData,
                [inputIdentifier]: newValue,
            };
        });
    }

    return (
        <main className="center">
            <Header></Header>
            <UserInput
                handleChange={handleChange}
                {...investmentData}
            ></UserInput>
            <Result {...investmentData}></Result>
        </main>
    );
}

export default App;
