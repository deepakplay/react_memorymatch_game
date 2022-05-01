import React, { useEffect, useState} from 'react'
import './cardlist.scss';
import './gamedata.scss';
import Card from '../card/card';
import { useCardListContext } from '../../context/cardlist';

export default function Cardlist() {
    const {cardList, setCardList, turns, setTurns} = useCardListContext();    
    const [turnCount, setTurnCount] = useState(0);    

    useEffect(() => {
        if(!cardList) return;
        if (turnCount === 2) {
            const matchedCardList = cardList.filter((card) => card.isflipped && !card.isOpened);

            let isMatch = false;
            if(matchedCardList.length===2){
                isMatch = matchedCardList[0].front === matchedCardList[1].front;
            }

            if(isMatch){
                const newCardList = cardList.map((card) => {
                    return (card.isflipped && !card.isOpened ) ? { ...card, isOpened: true} : card;
                });
                setCardList(newCardList);
                setTurnCount(0);
            }else{
                setTimeout(() => {
                    const newCardList = cardList.map((card) => {
                        return (!card.isOpened) ? { ...card, isflipped: false } : card;
                    });
                    setCardList(newCardList);
                    setTurnCount(0);
                }, 1000);                
            }            
        }
    }, [turnCount, cardList, setCardList, setTurnCount])

    const handleClick = (id) => {
        if (turnCount >= 2) return;
        if(cardList.find((card)=>card.id===id).isOpened) return;
        setTurnCount((preCount) => preCount + 1);

        const newCardList = cardList.map((card) => {
            return (card.id === id) ? { ...card, isflipped: true } : card
        });
        setCardList(newCardList);
        setTurns((preTurns) => preTurns + 1);        
    };

    return (
        <>
            <div className='CardList'>
                {                    
                    cardList && cardList.map((card) => {
                        return <Card key={card.id} {...card} handleClick={handleClick} />;
                    })
                }
            </div>
            <div className='Game_data'>
                <span className='turn_count'>Turns : {turns}</span>
            </div>
        </>
    );
}
