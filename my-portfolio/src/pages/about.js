import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <Layout>
        <Header headerText="Who Am I?" />
        <Header headerText="A Full Stack Developer" />
        <p>
          I am a full stack developer with a background in audio and creative
          production.
        </p>
      </Layout>
    </div>
  )
}
