import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GoThreeBars } from "react-icons/go"
import { MenuData } from "../data/menuData"
import Img from "gatsby-image"

const Header = ({ data }) => {
  return (
    //TODO: Fix Img issues
    <Nav>
      <NavLink to="/">Adam Tak, Web Developer</NavLink>

      <NavMenu>
        {MenuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <Bars />
    </Nav>
  )
}

export default Header

const query = graphql`
  query {
    file(relativePath: { eq: "../images/tak_software_2.png" }) {
      childImageSharp {
        fixed(width: 347, height: 184) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Nav = styled.nav`
  background: gray;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 600;
`
const Bars = styled(GoThreeBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
