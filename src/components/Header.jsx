import logo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={logo} alt="Logo showing moneyu bag" />
            <h1>Investment Calculator</h1>
        </header>
    );
}