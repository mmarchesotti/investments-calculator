export default function UserInput({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
    handleChange,
}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment-input">
                        INITIAL INVESTMENT
                    </label>
                    <input
                        id="initial-investment-input"
                        type="number"
                        value={initialInvestment}
                        required
                        onChange={(event) =>
                            handleChange('initialInvestment', event)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment-input">
                        ANNUAL INVESTMENT
                    </label>
                    <input
                        id="annual-investment-input"
                        type="number"
                        value={annualInvestment}
                        required
                        onChange={(event) =>
                            handleChange('annualInvestment', event)
                        }
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return-input">
                        EXPECTED RETURN
                    </label>
                    <input
                        id="expected-return-input"
                        type="number"
                        value={expectedReturn}
                        required
                        onChange={(event) =>
                            handleChange('expectedReturn', event)
                        }
                    />
                </p>
                <p>
                    <label htmlFor="duration-input">DURATION</label>
                    <input
                        id="duration-input"
                        type="number"
                        value={duration}
                        required
                        onChange={(event) => handleChange('duration', event)}
                    />
                </p>
            </div>
        </section>
    );
}
