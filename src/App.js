import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card'

function App() {

  const [cardList, setCardList] = useState(['A', 'O', 'U', 'F', 'E', 'Y', 'B', 'I']);
  const [usedCards, setUsedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [wrongCard, setWrongCard] = useState('');

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
    setWrongCard('');
    setLastScore(score);
    setScore(0);
    setUsedCards([]);
  }
  function handleClick(e) {
    const cardTarget = e.target.querySelector('span').textContent;
    if (usedCards.indexOf(cardTarget) >= 0) {
      setWrongCard(cardTarget)
      setTimeout(gameOver, 1000)
      return
    }

    setUsedCards([...usedCards, cardTarget])
    setScore(score + 1);
  }

  useEffect(() => {
    shuffle()
  }, [score])

  
  const cards = cardList.map((item, index) => {
    let wrong = false;
    if(wrongCard === item) {
      wrong = true;
    } 
    return <Card name={cardList[index]} wrong={wrong} onClick={handleClick}/>
  })

  return (
    <div className="App">
      <header>
        <span>Memory Card</span>
      </header>

      <section className='card-container'>
        {cards}
      </section>
      <div className='scores'>
        <span>Current score: {score}</span>
        <span>Last score: {lastScore}</span>
      </div>
    </div>
  );
}

export default App;
