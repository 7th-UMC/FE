import { useState } from "react";
import { API } from "../../api/axios";
import styled from "styled-components";
import colors from "../../styles/colors";
import { useNavigate } from "react-router-dom";

const StaffLoginContainer = styled.div`
    width: 60%;
    padding-top: 3.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 430px) {
        width: 92%;
        padding-top: 4rem;
    }
`

const StaffLoginP = styled.p`
    width: 100%;
    font-size: 6rem;
    font-weight: 600;
    line-height: 7.186rem;
    color: ${colors.white};
    margin-bottom: 4.598rem;

    @media screen and (max-width: 430px) {
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 3.341rem;
        margin-bottom: 3rem;
    }
`

const InputContainer1 = styled.div`
    width: 100%;
    height: 12.3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 430px) {
        height: 7.1rem;
    }
`

const InputContainer2 = styled(InputContainer1)`
    margin-top: 4rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.95rem;
    }
`

const StaffLoginP2 = styled.p`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
    }
`

const StaffLoginInput = styled.input`
    width: 100%;
    height: 6.4rem;
    border: none;
    border-radius: 0.4rem;
    background-color: ${colors.staffLoginColor};
    padding: 0 1rem;
    box-sizing: border-box;

    @media screen and (max-width: 430px) {
        height: 4rem;
        border-radius: 0.2rem;
    }
`

const LoginButton = styled.div`
    width: 100%;
    height: 10rem;
    border: none;
    border-radius: 0.8rem;
    background-color: ${colors.staffLoginColor2};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    font-family: Pretendard;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 3.819rem;
    color: ${colors.white};
    margin-top: 7.402rem;

    @media screen and (max-width: 430px) {
        height: 4.4rem;
        border-radius: 0.4rem;
        font-size: 1.8rem;
        line-height: 2.148rem;
        margin-top: 4rem;
    }
`

const StaffLogin = () => {
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await API.post('user/login', { loginId, password });
            console.log(response.data);
            localStorage.setItem('isLogin', 'true');
            navigate("/");
        } catch (error) {
            console.error('로그인 오류:', error);
            alert("아이디 또는 비밀번호가 맞지 않습니다.");
            localStorage.setItem('isLogin', 'false');
        }
    };

    return (
        <div className="pageContainer" style={{display: "flex", justifyContent: "center"}}>
            <StaffLoginContainer>
                <StaffLoginP>LOGIN</StaffLoginP>
                <InputContainer1>
                    <StaffLoginP2>아이디</StaffLoginP2>
                    <StaffLoginInput 
                        value={loginId} 
                        onChange={(e) => setLoginId(e.target.value)} 
                    />
                </InputContainer1>

                <InputContainer2>
                    <StaffLoginP2>비밀번호</StaffLoginP2>
                    <StaffLoginInput 
                        type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </InputContainer2>

                <LoginButton onClick={handleLogin}>로그인 하기</LoginButton>
            </StaffLoginContainer>
        </div>
    );
}

export default StaffLogin;