import { Link } from "gatsby"

import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const Header = props => {
  return <h1 id="headers">{props.headerText}</h1>
}

export default Header
