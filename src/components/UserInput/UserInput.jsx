import { useState } from "react"

export default function UserInput() {

    const [initialInvestment, setInitialInvestment] = useState(10000);
    const [annualInvestment, setAnnualInvestment] = useState(1200);
    const [expectedReturn, setExpectedReturn] = useState(7);
    const [duration, setDuration] = useState(12);

    const handleInitialInvestmentChange = (event) => {
        setInitialInvestment(event.target.value)
    }

    const handleAnnualInvestmentChange = (event) => {
        setAnnualInvestment(event.target.value)
    }

    const handleExpectedReturnChange = (event) => {
        setExpectedReturn(event.target.value)
    }

    const handleDurationChange = (event) => {
        setDuration(event.target.value)
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id="initial-investment" onChange={handleInitialInvestmentChange} value={initialInvestment} />
                </div>
                <div>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" onChange={handleAnnualInvestmentChange} value={annualInvestment} />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="initial-investment">Expected Return</label>
                    <input type="number" id="expected-return" onChange={handleExpectedReturnChange} value={expectedReturn} />
                </div>
                <div>
                    <label htmlFor="initial-investment">Duration</label>
                    <input type="number" id="duration" onChange={handleDurationChange} value={duration} />
                </div>
            </div>
        </section>
    )
}