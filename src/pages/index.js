import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <Headline>Hi, I'm Adam!{"\n"}</Headline>
        <AboutMe>I'm a front-end react developer.</AboutMe>
      </Main>
    </Layout>
  )
}

export default IndexPage

const Main = styled.div`
  display: flex;
  padding: 50px 50px 75px 100px;
  flex-direction: column;
`

const Headline = styled.h1`
  font-size: 48px;
`
const AboutMe = styled.h2`
  font-size: 30px;
  color: grey;
`
