import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ children, src, className }) {
    return (
        <div className={"card " + className}>
            <div className='logo-container'><img src={src} /></div>
            <div className='text-container'>{children}</div>

        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};
