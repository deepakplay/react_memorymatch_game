import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { CARD_LIST } from '../data/carddata';

const CardlistContext = createContext({
    cardList: [],
    newgame: () => { },
    setCardList: () => { },
    turns: 0,
    setTurns: () => { },
    gameLevel:0,
    setGameLevel: 1
});

export const useCardListContext = () => {
    return useContext(CardlistContext);
}

export const CardListProvider = ({ children }) => {
    const [cardList, setCardList] = useState([]);
    const [turns, setTurns] = useState(0);
    const [gameLevel, setGameLevel] = useState(1);
    

    const newgame = useCallback(() => {
        let init_id = 1;
        let newCardList = [];

        for (let i = 0; i < gameLevel; i++)
            newCardList = [...newCardList, ...CARD_LIST, ...CARD_LIST];

            newCardList = newCardList.map((data) => {
            return {
                id: init_id++,
                front: data,
                isflipped: false,
                isOpened: false,
            }
        });
        setCardList([]);
        setTimeout(() => {
            setCardList(newCardList.sort(() => Math.random() - 0.5));
        }, 100);
        setTurns(0);
    }, [gameLevel]);

    useEffect(() => {
        newgame();
    }, [newgame]);

    const value = {
        cardList,
        newgame,
        setCardList,
        turns,
        setTurns,
        gameLevel,
        setGameLevel
    }

    return (
        <CardlistContext.Provider value={value}>
            {children}
        </CardlistContext.Provider>);
}