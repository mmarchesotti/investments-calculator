export default function UserInput({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
    handleInitialInvestmentChange,
    handleAnnualInvestmentChange,
    handleExpectedReturnChange,
    handleDurationChange,
}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label for="initial-investment-input">
                        INITIAL INVESTMENT
                    </label>
                    <input
                        id="initial-investment-input"
                        type="number"
                        value={initialInvestment}
                        onChange={handleInitialInvestmentChange}
                    />
                </div>
                <div>
                    <label for="annual-investment-input">
                        ANNUAL INVESTMENT
                    </label>
                    <input
                        id="annual-investment-input"
                        type="number"
                        value={annualInvestment}
                        onChange={handleAnnualInvestmentChange}
                    />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label for="expected-return-input">EXPECTED RETURN</label>
                    <input
                        id="expected-return-input"
                        type="number"
                        value={expectedReturn}
                        onChange={handleExpectedReturnChange}
                    />
                </div>
                <div>
                    <label for="duration-input">DURATION</label>
                    <input
                        id="duration-input"
                        type="number"
                        value={duration}
                        onChange={handleDurationChange}
                    />
                </div>
            </div>
        </div>
    );
}
