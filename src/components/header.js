import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GoThreeBars } from "react-icons"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <Bars />
    </Nav>
  )
}

export default Header

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
`
const Bars = styled(GoThreeBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
  }
`
