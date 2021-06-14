import file from './docs/resume1.pdf';
import SocialMediaLink from './components/SocialMediaLink';
import ResumenDownload from './components/ResumeDownload';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Resume = () => {
    return (
        <>
            <h1>About Me</h1>
            <p>Hello! My name is Michelle Collins and I currently live in Bangor, Maine.</p>
            <p>Last year, in the middle of all the maddness, I received some money. I decided to take a course.</p>
            <p>Now I'm looking for a job as a web developer, and looking forward to a new challenge.</p>
            <p> I hope you like what you see!</p>
            <div className='container'>
                <h4>Find Me On Social Media</h4>
                <SocialMediaLink icon={faLinkedin} link='https://www.linkedin.com/in/chelle-collins/'/>
                <SocialMediaLink icon={faGithub} link='https://github.com/chelle-col' />
                <h4>Download My Resume</h4>
                <ResumenDownload file={file} type='PDF' />
            </div>
        </>
    )
}

export default Resume;