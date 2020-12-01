import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Layout>
        <Header headerText="Hello Gatsby" />
        <div>
          <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
          <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default Home
