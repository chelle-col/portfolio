import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ProjectDetail.css';

const ProjectDetail = ({ project }) => {
    return (
        <Card variant='top' className='ProjectDetail-Card m-2'>
            <Card.Img src={project.image} className='ProjectDetail-Image'/>
            <Card.Title className='m-2'>{project.title}</Card.Title>
            <Card.Text className='m-2'>{`${project.desc}`}</Card.Text>
            <Card.Footer className='mt-auto'>
                <Button href={`${project.url}`} className='mx-2'>Visit</Button>
                <Button href={`${project.github}`} variant='info' className='mx-2'>Github</Button>
            </Card.Footer>
        </Card>
    )
}

export default ProjectDetail;