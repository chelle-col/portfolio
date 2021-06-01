import Button from 'react-bootstrap/Button';
import file from './docs/resume1.pdf'

const Resume = () => {
    return (
        <>
            <h1>About Me</h1>
            <p>Hello! My name is Michelle Collins and I live in Bagnor, Maine. My hobbies include crocheting, hiking, and biking.</p>
            <p>Last year, I got some money. Rather than putting it into the bank and forgetting about it. I decided to take a course.</p>
            <p>I decided Springboard was a good fit for me. </p>
            <p>Now I'm looking for a job in this new field and I hope you like what you see!</p>
            <div className='container'>
                <div className='m-2'>
                    <Button>
                        <a className='text-white' href='https://www.linkedin.com/in/chelle-collins/'>Find Me on LinkedIn</a>
                    </Button>
                </div>
                <div className='m-2'>
                    <Button>
                        <a className='text-white' href='https://github.com/chelle-col'>Github</a>
                    </Button>
                </div>
                <div className='m-2'>
                    <Button>
                        <a className='text-white' href={file} download='MichelleResume'>PDF</a>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Resume;