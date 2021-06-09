import { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import './Home.css'

const Home = () => {
    const [ words, setWords ] = useState('');
    const [ index, setIndex ] = useState(0);

    const tab = '     ';
    const newLine = '\n'

    const greeting = [...`<div>`, 
        newLine + tab,...`<p>`, 
        newLine + tab, tab, ...`Michelle Collins`, 
        newLine + tab, tab, tab,...`<br>`, 
        newLine + tab, tab, ...`Full Stack Software Engineer`, 
        newLine + tab, ...`</p>`,
        newLine, ...`</div>`];

    const typeWords = () => {
        if(index < greeting.length){
            setWords( words => {
                const w = words + greeting[index];
                return w;
            });
            setIndex( index => index + 1 );
        }
    };
    
    useEffect( () => {
        const intervalId = setInterval(typeWords, 150);
        if( index > greeting.length - 1 ){
            clearInterval(intervalId);
        }
        return () => { clearInterval(intervalId) };
    });

    return (
        <>
        <h2>{words}<Cursor/></h2>
        </>
    );
}

export default Home;