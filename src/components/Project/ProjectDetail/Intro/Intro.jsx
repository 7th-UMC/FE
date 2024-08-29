import styled from "styled-components";
import colors from "../../../../styles/colors";

const IntroContainer = styled.div`
    width: 100%;
`

const IntroP = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        font-size: 2rem;
        line-height: 2.387rem;
    }
`

const IntroP2 = styled.p`
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 4.6rem;
    color: ${colors.introColor};
    margin-top: 1.6rem;

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 2rem;
        margin-top: 1.2rem;
    }
`

const Intro = ({ data }) => {
    return (
        <IntroContainer>
            <IntroP>{data.title}</IntroP>
            <IntroP2>{data.detailExplain}</IntroP2>
        </IntroContainer>
    )
}

export default Intro;