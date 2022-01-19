import React from 'react';


const Card: React.FC = (props) => {
    return (
        <div className="card">
                <div className="container">
                    {props.children}
                </div>
        </div>
    )
}

export default Card;
