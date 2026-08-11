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
