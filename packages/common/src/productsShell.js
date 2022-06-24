import * as React from 'react';
import {AppShell, Header, Navbar, UnstyledButton, Group, Text} from '@mantine/core'
import {BrowserRouter, Route, Outlet, Routes, Link} from 'react-router-dom';

export const ProductsShell = props => {
    return (
        <BrowserRouter>
            <AppShell
                header={
                    <Header height={60} p="xs">
                        <div style={{display: "flex", justifyContent: "space-between", fontSize: "18px", color: 'black', fontWeight: "bold"}}>
                            <span>{props.title}</span>
                            <span>{`Items: ${props.count}`}</span>
                        </div>
                    </Header>
                }
                navbar={<Nav navLinks={props.navLinks}/>}                
            >               
                <Outlet/>
                <Routes>
                   {
                        props.routes.map(route => {
                            return (
                                <Route key={route} path={route.path} element={route.element}/>
                            )
                        })
                   }
                </Routes>                
            </AppShell>
        </BrowserRouter>
    );
};


const Nav = props => {
    console.log(props.navLinks);
    return (
        <Navbar height={'90vh'} p="xs" width={{ base: 200 }}>
            <Navbar.Section>
                {props.navLinks.map((nav, index) => {
                    return (
                        <MainLink key={index} path={nav.path} name={nav.name}/>
                    );
                })}
            </Navbar.Section>
        </Navbar>
    );
};

const MainLink = props => {
    return (
        <Link to={props.path}>
            <UnstyledButton
                sx={(theme) => ({
                    display: 'block',
                    width: '100%',
                    padding: '10px',
                    borderRadius: '10px',
                    color: 'lightsalmon',
                    '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    },
                })}
            >
                <Group>
                    <Text size="sm">{props.name}</Text>
                </Group>
            </UnstyledButton>
        </Link>
    );
}