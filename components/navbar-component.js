import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import A from "./A";

export const NavbarComponent = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <A href={"/users"} text={"Пользователи"}/>
                <A
                    href={`/`}
                    text={'Главная'}
                />
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}


