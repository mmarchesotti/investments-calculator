import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import { useState } from 'react';

function App() {
    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 10,
        duration: 10,
    });

    function handleChange(inputIdentifier, event) {
        const newValue = +event.currentTarget.value;
        setInvestmentData((investmentData) => {
            return {
                ...investmentData,
                [inputIdentifier]: newValue,
            };
        });
    }

    const inputIsValid = investmentData.duration >= 1;

    return (
        <main>
            <Header></Header>
            <UserInput
                handleChange={handleChange}
                {...investmentData}
            ></UserInput>
            {inputIsValid ? (
                <Result {...investmentData}></Result>
            ) : (
                <p className="center">Enter a duration greater than 0.</p>
            )}
        </main>
    );
}

export default App;
