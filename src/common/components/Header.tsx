import * as React from 'react';
import {
    Image,
    MenuItem,
    Nav,
    Navbar,
    NavDropdown,
    NavItem
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap'

export class Header extends React.Component {
    public render() {
        return (
            <Navbar fluid={true} collapseOnSelect={true} >
                <Navbar.Header>
                    <Image src="images/logo_amex.png" />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/home">
                            <NavItem eventKey={1} href="/home">Home</NavItem>
                        </LinkContainer>
                        <NavItem eventKey={2} href="#">Manage Cancel Ticket</NavItem>
                        <NavDropdown eventKey={3} title="Configurations" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Manage Unique Fares</MenuItem>
                            <MenuItem eventKey={3.4}>OLBT Admin</MenuItem>
                            <MenuItem eventKey={3.4}>Update DK</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Miscellaneous" id="basic-nav-dropdown">
                            <NavDropdown eventKey={4.1} title="User Management" id="basic-nav-dropdown">
                                <LinkContainer to="/roles">
                                    <MenuItem eventKey={4.2}>Roles</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/associates">
                                    <MenuItem eventKey={4.3}>Associates</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Reports" id="basic-nav-dropdown">
                            <MenuItem eventKey={5.1}>Report 1</MenuItem>
                            <MenuItem eventKey={5.2}>Report 2</MenuItem>
                            <MenuItem eventKey={5.3}>Report 3</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}