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

    return (
        <DesktopMenuContainer>
            <MenuItem 
                onClick={() => navigate("/")} 
                active={location.pathname === "/"}
            >
                소개
            </MenuItem>
            <MenuItem 
                onClick={() => navigate("/project")} 
                active={location.pathname === "/project"}
            >
                프로젝트
            </MenuItem>
            <MenuItem 
                onClick={() => navigate("/qna")} 
                active={location.pathname === "/qna"}
            >
                Q&A
            </MenuItem>
            <MenuItem 
                onClick={() => navigate("/photo")} 
                active={location.pathname === "/photo"}
            >
                UMC Frame Photo
            </MenuItem>
            <MenuItem 
                onClick={() => navigate("/recruit")} 
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
