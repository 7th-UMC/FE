import styled from "styled-components";
import colors from "../../styles/colors";
import FooterLogo1 from "../../assets/images/Footer/footerLogo1.png";
import FooterLogo2 from "../../assets/images/Footer/footerLogo2.png";

const FooterContainer = styled.div`
    width: 100%;
    background-color: ${colors.footerColor};
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterInnerContainer = styled.div`
    width: 60%;
    height: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 430px) {
        width: 92%;
        height: 10rem;
    }
`

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`

const FooterLogoImg = styled.img`
    width: 2.4rem;

    @media screen and (max-width: 430px) {
        width: 1.2rem;
        content: url(${FooterLogo2});
    }
`

const FooterP = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.432rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1rem;
        line-height: 1.193rem;
    }
`

const FooterContainer2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;

    @media screen and (max-width: 430px) {
        margin-top: 0.927rem;
    }
`

const FooterLeftP = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: ${colors.footerColor2};
    text-align: left;

    @media screen and (max-width: 430px) {
        font-size: 0.8rem;
        line-height: 1.2rem;
    }
`

const FooterRightP = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    text-align: right;
    line-height: 2.4rem;
    color: ${colors.footerColor3};

    @media screen and (max-width: 430px) {
        font-size: 0.8rem;
        line-height: 1.2rem;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInnerContainer>
                <TopContainer>
                    <FooterLogoImg src={FooterLogo1} alt="logo" />
                    <FooterP>HSU_MAKE US CHALLENGE</FooterP>
                </TopContainer>

                <FooterContainer2>
                    <FooterLeftP>
                        이용약관 | 개인정보보호처리방침<br/>
                        copyright @ hsu_makeus_challenge <br/>
                        All rights reserved 
                    </FooterLeftP>
                    <FooterRightP>
                        PM·DE : 임채현, 양유진<br/>
                        FE : 양인서, 김다현, 윤혜성<br/>
                        BE : 장수빈, 강다현
                    </FooterRightP>
                </FooterContainer2>
            </FooterInnerContainer>
        </FooterContainer>
    )
}

export default Footer;