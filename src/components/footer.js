import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { footerMenuData } from "../data/footerMenuData"

const Footer = ({ data }) => {
  return (
    <Nav>
      <NavMenu>
        {footerMenuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Footer

const FooterText = styled.p``

const Nav = styled.nav`
  background: black;
  height: 40px;
  display: flex;
  justify-content: space-between;
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

const NavMenu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-right: -40px;
`
