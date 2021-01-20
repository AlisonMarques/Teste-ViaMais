import React from "react"

import cardStyles from "./card.module.scss"

const Card = () => {
  return (
    // selecionando apenas o (p) do componente Card
    <div className={cardStyles.card}>
      <h1>Title Card</h1>

      {/* Selecionando apenas o segundo h1*/}
      <h1 className={cardStyles.h1}>Title 2 Card</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <button>Button Card</button>
    </div>
  )
}

export default Card
