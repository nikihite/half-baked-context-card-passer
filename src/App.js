import './App.css';
import Player from './Player';
import CardList from './CardList';
import ExecutePassButton from './ExecutePassButton';
import { useCardContext } from './CardProvider';

function App() {
  const { 
    selectedCard,
    deck, 
    playerOneHand, 
    playerTwoHand, 
    playerThreeHand,
  } = useCardContext();

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player player={1} hand={playerOneHand}/>
        <Player player={2} hand={playerTwoHand}/>
        <Player player={3} hand={playerThreeHand}/>
        <CardList cards={deck} player={'deck'} />
      </section>
      <section>
        { selectedCard && <ExecutePassButton /> }
      </section>
    </div>
  );
}

export default App;