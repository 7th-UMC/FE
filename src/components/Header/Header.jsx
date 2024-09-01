import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderLogo1 from "../../assets/images/Header/headerLogo1.png";
import HeaderLogo2 from "../../assets/images/Header/headerLogo2.png";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import Menu from "./Menu/Menu";
import colors from "../../styles/colors";

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 1000;
    height: 8.3rem;
    background: ${({ scrolled, menuOpen }) =>
        menuOpen
            ? `${colors.headerBackground}`
            : scrolled
            ? 'var(--, linear-gradient(270deg, rgba(255, 255, 255, 0.00) -26.79%, rgba(0, 0, 0, 0.20) -6.82%, rgba(22, 22, 22, 0.18) 11.15%, rgba(255, 255, 255, 0.04) 123.81%))'
            : 'transparent'};
    background-blend-mode: overlay;
    backdrop-filter: ${({ scrolled, menuOpen }) => (scrolled || menuOpen ? 'blur(75px)' : 'none')};
    transition: background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;

    @media screen and (max-width: 430px) {
        height: 7.659rem;
    }
`;

const HeaderInnerContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 430px) {
        width: 92%;
    }
`;

const HeaderLeft = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    cursor: pointer;
`;

const HeaderLeftLogoImg = styled.img`
    width: 2.8rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderLogo2});
    }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = localStorage.getItem('isLogin') === 'true';
    const isStaffLogin = location.pathname === '/stafflogin';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleHomeClick = () => {
        navigate("/");
        window.scrollTo(0, 0);
        if (menuOpen) closeMenu();
    };

    const toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            setMenuOpen(true);
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        alert("로그아웃 되었습니다.");
        navigate('/');
    };

    return (
        <>
            <HeaderContainer scrolled={scrolled} menuOpen={menuOpen}>
                <HeaderInnerContainer>
                    <HeaderLeft onClick={handleHomeClick}>
                        <HeaderLeftLogoImg src={HeaderLogo1} alt="logo" />
                    </HeaderLeft>

                    <DesktopHeader isLogin={isLogin} handleLogout={handleLogout} />

                    <MobileHeader
                        isLogin={isLogin}
                        menuOpen={menuOpen}
                        toggleMenu={toggleMenu}
                        handleLogout={handleLogout}
                    />
                </HeaderInnerContainer>
            </HeaderContainer>

            {menuOpen && <Menu onClose={closeMenu} />}
        </>
    );
};

export default Header;
