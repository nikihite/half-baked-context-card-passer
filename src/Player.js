import React from 'react';
import CardList from './CardList';
import { useCardContext } from './CardProvider';

export default function Player({ player, hand }) {
  const {
    selectedCard, setSelectedCard, to, setTo, setFrom
  } = useCardContext();

  return (
    <div className={`player ${to === player ? 'selected-player' : ''}`} onClick={() => setTo(player)}>
      <p>Player {player}</p>
      <CardList
        cardLocation={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard} />
      
    </div>
  );
}