import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectDetail = ({ project }) => {
    return (
        <Card variant='top' style={{width: '30rem'}} className='m-2'>
            <Card.Img src={project.image} style={{maxHeight: '15rem', objectFit: 'cover'}} />
            <Card.Title className='m-2'>{project.title}</Card.Title>
            <Card.Text className='m-2'>{`${project.desc}`}</Card.Text>
            <Button href={`${project.url}`}>Visit</Button>
        </Card>
    )
}

export default ProjectDetail;