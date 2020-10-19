import React, { useState } from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

function Navigation(props: any) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Profile Page</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
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
            </Collapse>
        </Navbar>

    );
}

export default Navigation