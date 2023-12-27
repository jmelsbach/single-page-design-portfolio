import './Button.css';
export default function Button({color, children}) {
    return <button  className={`rounded-button ${color}`}>{children}</button> 
}