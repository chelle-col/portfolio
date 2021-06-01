import { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import './Home.css'

const Home = () => {
    const [ words, setWords ] = useState('');
    const [ index, setIndex ] = useState(0);

    const tab = '\n     ';

    const greeting = [...`<div>`, tab,
        ...`<p>`, tab,...`Hello!`, tab,...`<br>`, tab, 
        ...`Welcome to my website`, tab, ...`</p>`,'\n', ...`</div>`];

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
        const intervalId = setInterval(typeWords, 300);
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