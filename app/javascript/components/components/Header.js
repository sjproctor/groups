import React, { Component, useState } from 'react'
import {
  Collapse,
  Container,
  Jumbotron,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

class Header extends Component{
  constructor(){
    super()
    this.state = {
      collapsed: true
    }
  }

  // runs onclick to toggle the value of state
  toggleNavbar = () => {
    this.setState({collapsed: this.state.collapsed ? false : true })
  }

  render(){
    return(
      <React.Fragment>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Group Maker</h1>
          </Container>
          <Navbar color="faded" light>
            <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
            { !this.state.collapsed &&
              <Nav navbar>
                <NavItem>
                  <NavLink href="/users/sign_up">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/users/sign_in">Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
              </Nav>
            }
          </Navbar>
        </Jumbotron>
      </React.Fragment>
    )
  }
}
export default Header
