import React from 'react'
import './cardlist.scss';
import './gamedata.scss';
import Card from '../card/card';

export default function Cardlist() {
    return (
        <>
            <div className='CardList'>
                {
                    [...Array(12)].map(() => <Card />)
                }
            </div>
            <div className='Game_data'>
                <span className='turn_count'>Turns : {0}</span>                
            </div>
        </>
    );
}
