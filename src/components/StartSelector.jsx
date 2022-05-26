import React, { useEffect, useState } from "react"
import './StartSelector.css'
const StartSelector = ({setStart, topic, setTopic, setCardImages, cardImages}) => {
   const [counter, setCounter] = useState(false);
   /*  const setAsyncState = (newState, fn) => {
        return new Promise((resolve) => fn(newState));
    } */
    const fetchPhotos = async () => {
        const random = Math.floor(Math.random()*10 + 1);

        const links = [];

        await fetch(`https://pixabay.com/api/?key=25582711-2736a21576aede128247b7dc3&page=${random}&per_page=8&q=${topic}&image_type=photo`)
          .then((res) => res.json())
          .then((json) => {
            json.hits.forEach((hit) => {
              links.push(hit.webformatURL)
              });
            console.log(links);
            setCardImages(links)
          })
        
        /* await setAsyncState(links, setCardImages) */
    }
    
    const handleClick = async (e) => {
        // If clicked on the same topic as before
        if (topic === e.target.id) {
            fetchPhotos();
            setStart(false);
            return
        }
        // If clicked on a different topic
        setTopic(e.target.id);
    } 

    useEffect(() => {
        // Ignore useEffect on first render
        if(!counter) {
            return setCounter(1);
        }
        // Fetch as normal after first render
        fetchPhotos();
        setStart(false);
    }, [topic])


    return (
    <div className="start-selector">
      <h1>Choose a category:</h1>
      <button className="selector-option" id="dogs" onClick={handleClick}>Dogs</button>
      <button className="selector-option" id="planets" onClick={handleClick}>Planets</button>
      <button className="selector-option" id="chess" onClick={handleClick}>Chess pieces</button>
      <button className="selector-option" id="glasses" onClick={handleClick}>Glasses</button>
    </div>
    )
  }

export default StartSelector