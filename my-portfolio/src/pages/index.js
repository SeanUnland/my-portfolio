import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import NavBar from "../components/navBar"
import CarouselHome from "../components/carouselHome"
import "bootstrap/dist/css/bootstrap.min.css"

import { Link } from "gatsby"

const Home = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <NavBar />
      <Layout>
        <CarouselHome />
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
