import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import colors from "../../styles/colors";

const DesktopMenuContainer = styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const MenuItem = styled.p`
    cursor: pointer;
    font-family: Pretendard;
    font-size: 1.9rem;
    font-weight: ${({ active }) => (active ? '600' : '400')};
    color: ${colors.white};
`;

const LogoutP = styled.p`
    cursor: pointer;
    color: ${colors.white};
    font-size: 1.6rem;
    font-weight: 600;
`;

const DesktopHeader = ({ isLogin, handleLogout }) => { 
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <DesktopMenuContainer>
            <MenuItem 
                onClick={() => handleNavigation("/")} 
                active={location.pathname === "/"}
            >
                소개
            </MenuItem>
            <MenuItem 
                onClick={() => handleNavigation("/project")} 
                active={location.pathname === "/project"}
            >
                프로젝트
            </MenuItem>
            <MenuItem 
                onClick={() => handleNavigation(isLogin ? "/staffqna" : "/qna")} 
                active={location.pathname === "/qna" || location.pathname === "/staffqna"}
            >
                Q&A
            </MenuItem>
            <MenuItem 
                onClick={() => handleNavigation("/photo")} 
                active={location.pathname === "/photo"}
            >
                UMC Frame Photo
            </MenuItem>
            <MenuItem 
                onClick={() => handleNavigation("/recruit")} 
                active={location.pathname === "/recruit"}
            >
                지원하기
            </MenuItem>
            {isLogin && (
                <LogoutP onClick={handleLogout}>로그아웃</LogoutP>
            )}
        </DesktopMenuContainer>
    );
};

export default DesktopHeader;
