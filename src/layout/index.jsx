import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/global';
import { Theme } from '@/styles/theme';
import  Footer from '@/shared/Footer'
import Header from '@/shared/Header';
import Container from '@/components/Container';

const Layout = ()  =>{
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default Layout;
