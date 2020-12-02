import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

const Contact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulContactMe {
          edges {
            node {
              gitHub {
                raw
              }
              linkedIn {
                raw
              }
            }
          }
        }
      }
    `
  )

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Layout>
        <Header headerText="Contact Me" />
        <p>
          <a href="mailto:sdunland@gmail.com">sdunland@gmail.com</a>
        </p>
        <p>
          {data.allContentfulContactMe.edges.map(edge => {
            return (
              <div>
                <a>{edge.node.gitHub[0]}</a>
              </div>
            )
          })}
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
