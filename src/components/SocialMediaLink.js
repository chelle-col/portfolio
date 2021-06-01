import Button from 'react-bootstrap/Button';

const SocialMediaLink = ({ name, link }) => {
    return (
        <div className='m-2'>
                    <Button href={link}>{name}
                    </Button>
                </div>
    )
}

export default SocialMediaLink;