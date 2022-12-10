import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@/components/Container';
import HeaderContainer from './style';

import LOGO from '@/assets/images/common/logo.svg'


const Header = () => {
    return (
        <HeaderContainer>
            <Container className="header-container">
                <Link to="/">
                    <picture>
                        <img src={LOGO} alt="logo" />
                    </picture>
                    <h1>The Film Club</h1>
                </Link>
            </Container>
        </HeaderContainer>
    );
}
 
export default Header;