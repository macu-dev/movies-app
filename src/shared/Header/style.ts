import styled from 'styled-components';

const HeaderContainer  = styled.header`
    background: #fff;
    box-shadow: 0 4px 45px rgba(0, 0, 0, 0.08);
    padding: 20px 0;

    .header-container{
        display: flex;

        a{
            display: flex;
            align-items: center;
            img{
                width: 40px;
                height: 40px;
            }

            h1{
                padding-left: 10px;
                font-size: 18px;
            }
        }
    }
`;

export default HeaderContainer;