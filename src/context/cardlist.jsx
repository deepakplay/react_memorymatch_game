import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { CARD_LIST } from '../data/carddata';

const CardlistContext = createContext({
    cardList: [],
    newgame: () => { },
    setCardList: () => { },
    turns: 0,
    setTurns: () => { }
});

export const useCardListContext = () => {
    return useContext(CardlistContext);
}

export const CardListProvider = ({ children }) => {
    const [cardList, setCardList] = useState([]);
    const [turns, setTurns] = useState(0);

    const newgame = useCallback(() => {
        let init_id = 1;
        let cardList = [...CARD_LIST, ...CARD_LIST, ...CARD_LIST, ...CARD_LIST].map((data) => {
            return {
                id: init_id++,
                front: data,
                isflipped: false,
                isOpened: false,
            }
        });
        setCardList(cardList.sort(() => Math.random() - 0.5));
        setTurns(0);
    },[]);

    useEffect(() => {
        newgame();
    }, [newgame]);

    const value = {
        cardList,
        newgame,
        setCardList,
        turns,
        setTurns
    }

    return (
        <CardlistContext.Provider value={value}>
            {children}
        </CardlistContext.Provider>);
}