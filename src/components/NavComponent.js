import * as React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavDropdown, MenuItem, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class NavComponent extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/oversikt">Oversikt</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/onskeliste">
              <NavItem>Ønskjeliste</NavItem>
            </LinkContainer>
            <NavDropdown title="Stader" id="stader">
              <LinkContainer to="/oskyrkje">
                <MenuItem>Os Kyrkje</MenuItem>
              </LinkContainer>
              <LinkContainer to="/moldegaard">
                <MenuItem>Moldegaard</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <NavDropdown title="Transport" id="basic-nav-dropdown">
              <LinkContainer to="/transport-tiloskyrkje">
                <MenuItem>Til Os Kyrkje</MenuItem>
              </LinkContainer>
              <LinkContainer to="/transport-tilmoldegaard">
                <MenuItem>Os Kyrkje til Moldegaard</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/kontakter">
              <NavItem>Kontaktpersoner</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
