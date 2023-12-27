import './Header.css';
import logo from '../assets/images/logo.svg';
import Button from './Button';
export default function Header(){
    return <header>
        <img src={logo} alt="logo" />
        <Button color="black-bg">Free Consultation</Button>
    </header>
}