import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

const Work = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Layout>
        <Header headerText="Works" />{" "}
      </Layout>
    </div>
  )
}

export default Work
