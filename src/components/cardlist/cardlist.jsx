import React from 'react'
import './cardlist.scss';
import Card from '../card/card';

export default function Cardlist() {
    return (
        <div className='CardList'>
            { 
                [...Array(12)].map(()=> <Card/>)
            }
        </div>
    );
}
