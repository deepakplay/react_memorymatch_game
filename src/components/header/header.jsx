import React from 'react'
import { useCardListContext } from '../../context/cardlist';
import './header.scss';

export default function Header() {
    const { newgame } = useCardListContext();
    return (
        <header className='Header'>
            <h2>Memory Matching</h2>
            <button className="new_game" onClick={() => newgame()}>New game</button>
        </header>
    )
}
