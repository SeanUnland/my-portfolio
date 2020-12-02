import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

const Work = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Layout>
        <Header headerText="Things I've Created" />{" "}
        <a href="https://mini-pop.netlify.app/">Mini-Pop</a>
      </Layout>
    </div>
  )
}

export default Work
