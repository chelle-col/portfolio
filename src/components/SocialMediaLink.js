import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMediaLink.css';

const SocialMediaLink = ({ icon, link }) => {
    return (
        <div className='m-2 SocialMediaLink'>
            <Button href={link} className='p-1'><FontAwesomeIcon size='2x' icon={icon}/>
            </Button>
        </div>
    )
}

export default SocialMediaLink;