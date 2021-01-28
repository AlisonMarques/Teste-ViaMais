import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <nav>
    <Link to="/about" activeStyle={{ color: "red" }}>
      about 
    </Link> |
    <Link to="/contact" activeStyle={{ color: "red" }}>
      contact
    </Link>
  </nav>
)

export default Menu
