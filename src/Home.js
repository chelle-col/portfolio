import { useEffect, useState } from 'react';
import Cursor from './components/Cursor';
import './Home.css'

const Home = () => {
    const [ words, setWords ] = useState('');
    const [ index, setIndex ] = useState(0);

    const greeting = [...`<div>
        <p>
        Hello!
        <br>
        Welcome to my website
        </p>
</div>`];

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
        const intervalId = setInterval(typeWords, 500);
        if( index > greeting.length - 1 ){
            clearInterval(intervalId);
        }
        return () => { clearInterval(intervalId) };
    });

    return (
        <>
        <h1>I am Home Page</h1>
        <h2>{words}<Cursor/></h2>
        </>
    );
}

export default Home;