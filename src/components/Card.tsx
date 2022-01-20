import React, {useEffect, useState} from 'react';


const Card: React.FC = (props) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setCount(c => c + 1);
            console.log('tick');
        }, 500);
        console.log('load');
        return () => {
            clearInterval(timer);
            console.log('destroy');
        };
    }, []);


    return (
        <div className="card">
                <div className="container">
                    <h1>{count}</h1>
                    {props.children}
                </div>
        </div>
    )
}

export default Card;
