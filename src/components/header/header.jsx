import React from 'react'
import { useCardListContext } from '../../context/cardlist';
import './header.scss';

export default function Header() {
    const { newgame, setGameLevel } = useCardListContext();
    return (
        <header className='Header'>
            <h2>Memory Matching</h2>
            <div className='game_options'>
                <select onChange={(e)=> setGameLevel(e.target.value)}>
                    <option value="1">Easy</option>
                    <option value="2">Medium</option>
                    <option value="3">Hard</option>
                </select>
                <button className="new_game" onClick={() => newgame()}>New game</button>
            </div>            
        </header>
    )
}
