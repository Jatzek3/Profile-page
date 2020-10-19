import React from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Navigation(props: any) {

    return (

        <Navbar color="light" light expand="md">
            <NavbarBrand >Profile Page</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink><Link to='/'>Home</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to='/about'>About</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to='/contact'>Contact</Link></NavLink>
                </NavItem>
            </Nav>
        </Navbar >

    );
}

export default Navigation