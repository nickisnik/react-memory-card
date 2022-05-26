import React, { useEffect } from 'react'
import Card from './Card'

const CardContainer = ({cardList, setCardImages, topic, winAnnounce, handleClick, cardImages, wrongCard}) => {

   

    useEffect(() => {
        setCardImages([...cardImages])
    }, [topic])

    const cards = cardList.map((item, index) => {
        let wrong = false;
        if(wrongCard === item) {
          wrong = true;
        } 
        return <Card id={item} name={cardList[index]} image={cardImages[item]} wrong={wrong} onClick={handleClick}/>
      })

  return (
    <section className='card-container'>
        {cards}
        <div className={winAnnounce ? 'win-overlay show' : 'win-overlay'}>
          <span>You win!</span>
        </div>
    </section>
  )
}

export default CardContainer