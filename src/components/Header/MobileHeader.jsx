import React from "react";
import styled from "styled-components";
import HeaderBar1 from "../../assets/images/Header/headerBar1.png";
import HeaderBar2 from "../../assets/images/Header/headerBar2.png";
import HeaderMenu1 from "../../assets/images/Header/headerMenu1.png";
import HeaderMenu2 from "../../assets/images/Header/headerMenu2.png";
import colors from "../../styles/colors";

const MobileContainer = styled.div`
    display: flex;
    gap: 3.822rem;
    align-items: center;

    @media screen and (min-width: 769px) {
        display: none;
    }
`;

const LogoutP = styled.p`
    cursor: pointer;
    color: ${colors.white};
    font-size: 1.6rem;
    font-weight: 600;

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 2rem;
        font-weight: 400;
    }
`;

const HeaderRightImg = styled.img`
    cursor: pointer;
    width: 4rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderBar2});
    }
`;

const HeaderRightImg2 = styled.img`
    cursor: pointer;
    width: 4rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderMenu2});
    }
`;

const MobileHeader = ({ isLogin, menuOpen, toggleMenu, handleLogout }) => {
    return (
        <MobileContainer>
            {isLogin && (
                <LogoutP onClick={handleLogout}>로그아웃</LogoutP>
            )}
            {menuOpen ? (
                <HeaderRightImg2 src={HeaderMenu1} alt="headerMenu" onClick={toggleMenu} />
            ) : (
                <HeaderRightImg src={HeaderBar1} alt="headerBar" onClick={toggleMenu} />
            )}
        </MobileContainer>
    );
};

export default MobileHeader;
