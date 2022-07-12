import React from 'react';
import CardList from './CardList';
import { useCardContext } from './CardProvider';

export default function Player() {
  const {
    player,
    setTo,
    hand,
    setFrom,
    setSelectedCard,
    selectedCard,
    to
  } = useCardContext();
  return (
    <div className={`player ${to === player ? 'selected-player' : ''}`} onClick={() => setTo(player)}>
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard} />
      
    </div>
  );
}
