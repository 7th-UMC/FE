import styled from "styled-components";
import colors from "../../../styles/colors";
import IntroLogo1 from "../../../assets/images/Home/Intro/introLogo1.png";
import IntroLogo2 from "../../../assets/images/Home/Intro/introLogo2.png";

const IntroContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 6rem 0 8rem 0;

    @media screen and (max-width: 430px) {
        margin: 3.282rem 0 4.4rem 0;
    }
`

const IntroLogoImg = styled.img`
    width: 12rem;

    @media screen and (max-width: 430px) {
        width: 4.8rem;
        content: url(${IntroLogo2})l
    }
`

const IntroP = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    letter-spacing: 0.03rem;
    color: ${colors.white};
    margin-top: 4rem;

    @media screen and (max-width: 430px) {
        font-size: 2.8rem;
        line-height: 3.341rem;
        margin-top: 0.89rem;
    }
`

const IntroP2 = styled.p`
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 2rem;
    color: ${colors.introColor};
    margin-top: 3.4rem;

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 2.188rem;
        margin-top: 1.6rem;
    }
`

const IntroP3 = styled.p`
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 4rem;
    text-align: center;
    color: ${colors.introColor2};
    margin-top: 1.6rem;

    span {
        font-weight: 400;
    }

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 2rem;
        margin-top: 0.774rem;
    }
`

const Intro = () => {
    return (
        <IntroContainer>
            <IntroLogoImg src={IntroLogo1} alt="intro" />

            <IntroP>UMC란?</IntroP>
            <IntroP2>앱&웹 서비스 런칭에 도전하는 대학생 IT 연합동아리</IntroP2>
            <IntroP3>
                University MakeUs Challenge[UMC]
                <span>
                    는 2021년 8월을 시작으로, IT 프로젝트 경험과<br/>
                    네트워킹 기회를 제공하기 위해 결성되었습니다. 서비스를 직접 기획하고 개발할 수 있는<br/>
                    기회를 얻을 수 있으며, IT 역량 향상과 UX/UI 실무 경험을 축적할 수 있습니다.
                </span>
            </IntroP3>
        </IntroContainer>
    )
}

export default Intro;