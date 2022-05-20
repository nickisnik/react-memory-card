import React from "react"
import './StartSelector.css'
const StartSelector = () => {


    return (
    <div className="start-selector">
      <h1>Choose a category:</h1>
      <button className="selector-option">Dogs</button>
      <button className="selector-option">Planets</button>
      <button className="selector-option">Chess pieces</button>
      <button className="selector-option">Glasses</button>
    </div>
    )
  }

export default StartSelector