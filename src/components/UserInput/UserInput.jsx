export default function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id="initial-investment" value="10000" />
                </div>
                <div>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" value="1200" />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="initial-investment">Expected Return</label>
                    <input type="number" id="expected-return" value="7" />
                </div>
                <div>
                    <label htmlFor="initial-investment">Duration</label>
                    <input type="number" id="duration" value="12" />
                </div>
            </div>
        </section>
    )
}