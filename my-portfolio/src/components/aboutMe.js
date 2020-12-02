import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./aboutMe.css"

const AboutMe = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutMe {
        edges {
          node {
            bio
            name
            languages {
              languages
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <p>
        {data.allContentfulAboutMe.edges.map(edge => {
          return (
            <div>
              <ul>{edge.node.languages.languages}</ul>
            </div>
          )
        })}
      </p>
    </div>
  )
}

export default AboutMe
