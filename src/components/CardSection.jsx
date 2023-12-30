import './CardSection.css'
import appIcon from '../assets/images/pattern-apps.svg';
import graphicDesignIcon from '../assets/images/pattern-graphic-design.svg';
import illustrationIcon from '../assets/images/pattern-illustrations.svg';
import motionGraphicsIcon from '../assets/images/pattern-motion-graphics.svg';
import photographyIcon from '../assets/images/pattern-photography.svg';
import uiUxIcon from '../assets/images/pattern-ui-ux.svg';




import Card from './Card.jsx'
export default function CardSection() {
    return (
        <section>
            <div className="card-section">
                <div className="card-container"><Card src={graphicDesignIcon} className='large purple-bg'>Graphic Design</Card></div>
                <div className="card-container">
                    <div className="card-row"><Card src={uiUxIcon} className='small orange-bg'>UI/UX</Card>
                    <Card src={appIcon} className='small peach-bg'>Apps</Card></div>
                    <Card src={illustrationIcon} className='medium red-bg'>Illustrations</Card>
                </div>
                <div className="card-container extra-width">
                    <Card src={motionGraphicsIcon} className='medium-alt mint-bg'>Photography</Card>
                    <Card src={photographyIcon} className='medium brown-bg grow'>Motion Graphics</Card>
                </div>
            </div>
        </section>
    )
}