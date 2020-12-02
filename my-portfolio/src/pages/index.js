import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Layout>
        <Header headerText="" />
        <div>
          <h1></h1>
          <p></p>
        </div>
      </Layout>
    </div>
  )
}

export default Home
