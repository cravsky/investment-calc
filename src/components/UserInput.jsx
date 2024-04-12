export default function UserInput({ onInputChange, userInput }) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input
                    value={userInput.initialInvestment}
                    type="number"
                    required
                    onChange={(e) => onInputChange('initialInvestment', e.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input
                    value={userInput.annualInvestment}
                    type="number"
                    required
                    onChange={(e) => onInputChange('annualInvestment', e.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label >Expected Return</label>
                <input
                    value={userInput.expectedReturn}
                    type="number"
                    required
                    onChange={(e) => onInputChange('expectedReturn', e.target.value)} />
            </p>
            <p>
                <label >Duration</label>
                <input
                    value={userInput.duration}
                    type="number"
                    required
                    onChange={(e) => onInputChange('duration', e.target.value)} />
            </p>
        </div>

    </section>
}