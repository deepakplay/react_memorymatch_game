import React from 'react'
import './header.scss';

export default function Header({ newgameHandler }){
    return (
        <header className='Header'>
            <h2>Memory Game</h2>
            <button className="new_game" onClick={newgameHandler}>New game</button>
        </header>
    )
}
