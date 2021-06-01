import Button from 'react-bootstrap/Button';
import './SocialMediaLink.css';

const SocialMediaLink = ({ name, link }) => {
    return (
        <div className='m-2 SocialMediaLink'>
            <Button href={link}>{name} 
            </Button>
        </div>
    )
}

export default SocialMediaLink;