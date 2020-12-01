import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

const Contact = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Layout>
        <Header headerText="Contact Me" />
        <p>
          <a href="mailto:sdunland@gmail.com">sdunland@gmail.com</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/sean-unland-b46b2743/">
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://github.com/SeanUnland">Git Hub</a>
        </p>
      </Layout>
    </div>
  )
}

export default Contact
