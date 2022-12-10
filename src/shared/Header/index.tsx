import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@/components/Container';
import HeaderContainer from './style';

import LOGO from '@/assets/images/common/logo.svg'


const Header: React.FunctionComponent = () => {
    return (
        <HeaderContainer>
            <Container className="header-container">
                <Link to="/">
                    <picture>
                        <img src={LOGO} alt="logo" />
                    </picture>
                    <p>Movies app</p>
                </Link>
            </Container>
        </HeaderContainer>
    );
}
 
export default Header;