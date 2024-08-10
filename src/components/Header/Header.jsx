import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

import HeaderLogo1 from "../../assets/images/Header/headerLogo1.png";
import HeaderLogo2 from "../../assets/images/Header/headerLogo2.png";
import HeaderBar1 from "../../assets/images/Header/headerBar1.png";
import HeaderBar2 from "../../assets/images/Header/headerBar2.png";
import HeaderMenu1 from "../../assets/images/Header/headerMenu1.png";
import HeaderMenu2 from "../../assets/images/Header/headerMenu2.png";

import Menu from "./Menu/Menu";

const HeaderContainer = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 430px) {
        height: 7.659rem;
    }
`

const HeaderInnerContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 430px) {
        width: 92%;
    } 
`

const HeaderLeft = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    cursor: pointer;
`

const HeaderLeftLogoImg = styled.img`
    width: 2.8rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderLogo2});
    } 
`

const HeaderLeftP = styled.p`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.909rem;
    color: ${colors.white};
`

const HeaderRightImg = styled.img`
    cursor: pointer;
    width: 4rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderBar2});
    }
`

const HeaderRightImg2 = styled.img`
    cursor: pointer;
    width: 4rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderMenu2});
    }
`

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    }

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <>
            <HeaderContainer>
                <HeaderInnerContainer>
                    <HeaderLeft onClick={handleHomeClick}>
                        <HeaderLeftLogoImg src={HeaderLogo1} alt="logo" />
                        <HeaderLeftP>HSU UMC</HeaderLeftP>
                    </HeaderLeft>
                    {menuOpen ? (
                        <HeaderRightImg2 src={HeaderMenu1} alt="headerMenu" onClick={toggleMenu} />
                    ) : (
                        <HeaderRightImg src={HeaderBar1} alt="headerBar" onClick={toggleMenu} />
                    )}
                </HeaderInnerContainer>
            </HeaderContainer>

            {menuOpen && <Menu onClose={closeMenu}/>}
        </>
    )
}

export default Header;