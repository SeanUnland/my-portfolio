import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>

      <Header headerText="Hello Gatsby" />
      <div>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </div>
    </div>
  )
}

export default Home
