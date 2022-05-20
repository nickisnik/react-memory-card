import React, { useEffect } from 'react'
import Card from './Card'

const CardContainer = ({cardList, setCardImages, topic, winAnnounce, handleClick, cardImages, wrongCard}) => {

    const random = Math.floor(Math.random()*10 + 1)
    const fetchPhotos = () => {
        fetch(`https://pixabay.com/api/?key=25582711-2736a21576aede128247b7dc3&page=${random}&per_page=8&q=${topic}&image_type=photo`)
          .then((res) => res.json())
          .then((json) => {
            const links = [];
            json.hits.forEach((hit) => {
              links.push(hit.webformatURL)
              });
            console.log(links)
            setCardImages(links)
          })
    }
    useEffect(() => {
        fetchPhotos()
    }, [])

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