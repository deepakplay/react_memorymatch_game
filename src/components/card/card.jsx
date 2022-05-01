import React, { useState } from 'react';
import './card.scss';
import front from '../../assets/cover.png';
import back from '../../assets/helmet-1.png';

export default function Card() {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className='card' onClick={()=> setFlipped(!flipped)} >
            <div className={`card-image-container${flipped?' flipped':''}`}>
                <div className="card-image front" style={{ background: `url(${front})` }}></div>
                <div className="card-image back" style={{ background: `url(${back})` }}></div>
            </div>
        </div>
    )
}
