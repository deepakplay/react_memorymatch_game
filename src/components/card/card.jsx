import React from 'react';
import './card.scss';
import { CARD_BACK as back } from '../../data/carddata';

export default function Card({ front, isflipped, handleClick, id, isOpened }) {

    return (
        <div className='card' onClick={() => handleClick(id)} >            
            <div className={`card-image-container${isflipped ? ' flipped' : ''}${isOpened ? ' opened' : ''}`}>
                <div className="card-image front" style={{ background: `url(${front})` }}></div>
                <div className="card-image back" style={{ background: `url(${back})` }}></div>
            </div>
        </div>
    )
}
