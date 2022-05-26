import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import StartSelector from './components/StartSelector';

// NEED TO ADD INDIVIDUAL KEYS TO CARD ARRAY

function App() {

  const [cardList, setCardList] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [usedCards, setUsedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [wrongCard, setWrongCard] = useState('');
  const [winAnnounce, setWinAnnounce] = useState(false);
  const [start, setStart] = useState(true);

  const [cardImages, setCardImages] = useState([]);

  const [topic, setTopic] = useState('white+husky')

  function shuffle() {
    const cardArray = [...cardList];
    let newCardArray = [];
    for(let i = 0; i < 8; i++) {
      const randomCardIndex = Math.floor(Math.random()*(8 - i));
      newCardArray.push(cardArray.splice(randomCardIndex, 1)[0])
    }
    setCardList(newCardArray)
  }

  function gameOver() {
    setWinAnnounce(false);
    setWrongCard('');
    setLastScore(score);
    setScore(0);
    setUsedCards([]);
    shuffle()
  }
  function handleClick(e) {
    const cardTarget = parseInt(e.target.id);
    if (usedCards.indexOf(cardTarget) >= 0) {
      setWrongCard(cardTarget)
      setTimeout(gameOver, 1000)
      return
    }

    setUsedCards([...usedCards, cardTarget])
    setScore(score + 1);
    shuffle()
  }


  useEffect(() => {
    // ON PAGE LOAD
   /*  fetchPhotos() */
    shuffle();
  }, [])

  useEffect(() => {
    if(score > 7) {
      setWinAnnounce(true);
      setTimeout(gameOver, 1500);
    }
  }, [score]);

  
  
  // useEffect(() => {
  //   shuffle()
  // }, [score])

  
  

  return (
    <div className="App">
      <header>
        <span>Memory Card</span>
      </header>

      {start && <StartSelector topic={topic}
                               setTopic={setTopic}
                               setStart={setStart}
                               cardImages={cardImages}
                               setCardImages={setCardImages}/>}

      {!start && <CardContainer cardList={cardList}
                               wrongCard={wrongCard}
                               cardImages={cardImages}
                               setCardImages={setCardImages}
                               handleClick={handleClick}
                               winAnnounce={winAnnounce}
                               topic={topic}
                              />}

      {!start && <div className='scores'>
        <button onClick={() => {setStart(true); setCardImages([])}}>Back</button>
        <span>Current score: {score}</span>
        <span>Last score: {lastScore}</span>

      </div>}

    </div>
  );
}

export default App;
