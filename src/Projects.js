import CardGroup from 'react-bootstrap/CardGroup';
import ProjectDetail from './components/ProjectDetail';
import encounterTimeImage from './images/encounterTime.png';
import ankhImage from './images/ankh.png';

const Projects = () => {
    const EncounterTime = {
        title: 'Encounter Time',
        image: encounterTimeImage,
        desc: `An encounter builder for Dungeons and Dragons. 
        Makes building encounters easier. With the ablity to save and alter, you can build a new campaign.
        Built with an express/postgresql back end, and a React front end`,
        url: 'https://encounter-time.surge.sh/',
        github: 'https://github.com/chelle-col/capstone2'
    }
    const Ankh = {
        title: 'Ankh: A Photo Filter Site',
        image: ankhImage,
        desc: `Adds filters to images. Choose from the ones kindly offered by Unsplash, or upload your own. Fully customizable, play around with the values or choose one of the presets. You can even stack filters if you'd like.
        Full stack website built in Flask and SqlAlchemy for the back end and html/css/javascript for the front end.`,
        url: 'http://mycapstone1.herokuapp.com/index',
        github: 'https://github.com/chelle-col/capstone1'
    }
    return (
        <>
            <h1>Projects</h1>
            <CardGroup>
                <ProjectDetail project={EncounterTime} />
                <ProjectDetail project={Ankh} />
            </CardGroup>
        </>
    )
}

export default Projects;