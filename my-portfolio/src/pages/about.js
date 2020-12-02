import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulAboutMe {
          edges {
            node {
              bio
              name
            }
          }
        }
      }
    `
  )
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Layout>
        <Header headerText="Who Am I?" />
        <p>
          {data.allContentfulAboutMe.edges.map(edge => {
            return (
              <div>
                <h3>{edge.node.bio}</h3>
              </div>
            )
          })}
        </p>
      </Layout>
    </div>
  )
}
