import Button from 'react-bootstrap/Button';

const SocialMediaLink = ({ name, link }) => {
    return (
        <div className='m-2'>
                    <Button>
                        <a className='text-white' href={link}>{name}</a>
                    </Button>
                </div>
    )
}

export default SocialMediaLink;