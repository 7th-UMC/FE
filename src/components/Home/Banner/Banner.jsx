import styled from "styled-components";
import colors from "../../../styles/colors";
import BannerBackground1 from "../../../assets/images/Home/Banner/banner1.png";
import BannerBackground2 from "../../../assets/images/Home/Banner/banner2.png";
import BannerLogo1 from "../../../assets/images/Home/Banner/bannerLogo1.png";
import BannerLogo2 from "../../../assets/images/Home/Banner/bannerLogo2.png";

const BanenrContainer = styled.div`
    width: 100%;
    //height: 102rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, ${colors.bannerBackground1} 11.63%, ${colors.bannerBackground2} 40.58%, ${colors.bannerBackground3} 69.52%, ${colors.bannerBackground4} 96%, ${colors.bannerBackground5} 127.4%);


    @media screen and (max-width: 430px) {
        //height: 19.695rem;
    }
`

const BannerBackImg = styled.img`
    width: 100%;
    //height: 100%;

    @media screen and (max-width: 430px) {
        content: url(${BannerBackground2});
    }
`

const BannerInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 71.2rem;

    @media screen and (max-width: 430px) {
        width: 22.923rem;
    }
`

const BannerP = styled.p`
    font-size: 4.4rem;
    font-weight: 400;
    line-height: 6.371rem;
    text-align: center;
    font-family: Shippori Antique B1;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 2.606rem;
    }
`

const BannerImg = styled.img`
    width: 100%;
    margin-top: 0.793rem;

    @media screen and (max-width: 430px) {
        content: url(${BannerLogo2});
        margin-top: 0rem;
    }
`

const BannerP2 = styled.p`
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 4.296rem;
    color: ${colors.white};
    opacity: 0.95;
    margin-top: 0.799rem;

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
        margin-top: 0.849rem;
    }
`

const Banner = () => {
    return (
        <BanenrContainer>
            <BannerBackImg src={BannerBackground1} alt="banner" />

            <BannerInnerContainer>
                <BannerP>BREAK THE RULES</BannerP>
                <BannerImg src={BannerLogo1} alt="banner" />
                <BannerP2>HSU_MAKE US CHALLENGE</BannerP2>
            </BannerInnerContainer>
        </BanenrContainer>
    )
}

export default Banner;