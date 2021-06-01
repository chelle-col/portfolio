import Button from 'react-bootstrap/Button';

const ResumenDownload = ({ file, type }) => {
    return (
        <div className='m-2'>
                    <Button>
                        <a className='text-white' href={file} download='Michelle Collins Resume'>{type}</a>
                    </Button>
        </div>
    )
}

export default ResumenDownload;