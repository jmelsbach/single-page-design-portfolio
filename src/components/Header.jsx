import './Header.css';
import logo from '../assets/images/logo.svg';
import Button from './Button';
export default function Header(){
    return <header>
        <div className='header-container'>
            <img className="logo" src={logo} alt="logo" />
            <Button color="black-bg">Free Consultation</Button>
        </div>
        
    </header>
}