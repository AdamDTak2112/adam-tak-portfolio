import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footer = ({ data }) => {
  return (
    //TODO: Implement dynamic menu based on footerMenuData
    <Nav>
      <NavLink to="https://github.com/AdamDTak2112">Github!</NavLink>
      <NavLink to="/contact">Contact Me!</NavLink>
    </Nav>
  )
}

export default Footer

const Nav = styled.nav`
  background: black;
  height: 40px;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 0%;
  cursor: pointer;
`
