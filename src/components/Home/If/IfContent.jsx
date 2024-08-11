import styled from "styled-components";
import colors from "../../../styles/colors";
import HomeData from "../../../utils/Home/homeData";

const IfContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;

    @media screen and (max-width: 430px) {
        margin-bottom: 4rem;
    }
`

const IfBox = styled.div`
    height: 8.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 430px) {
        height: 4.917rem;
    }
`

const IfBox2 = styled.div`
    width: 92.9rem;
    height: 110.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 7.2rem;

    @media screen and (max-width: 430px) {
        width: 36.663rem;
        height: 46.022rem;
        margin-top: 4.164rem;
    }
`

const IfP = styled.p`
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 3.819rem;
    letter-spacing: 0.06rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.5rem;
        line-height: 1.909rem;
    }
`

const IfP2 = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    letter-spacing: 0.06rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 2rem;
        line-height: 2.387rem;
    }
`

const IfP3 = styled.p`
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.341rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 1.671rem;
    }
`

const IfP4 = styled.p`
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 3.5rem;
    text-align: justified;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
`

const IfInnerBox = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

const IfInnerImg = styled.img`
    width: 50rem;
    border-radius: 0.6rem;

    @media screen and (max-width: 430px) {
        width: 16rem;
        border-radius: 0.4rem;
    }
`

const RightContainer = styled.div`
    width: 36.2rem;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 1.6rem;
    padding-top: 1.1rem;

    @media screen and (max-width: 430px) {
        width: 18.1rem;
        gap: 0.598rem;
        padding-top: 0.422rem;
    }
`  

const IfContent = () => {
    return (
        <IfContainer>
            <IfBox>
                <IfP>HSU UMC</IfP>
                <IfP2>챌린저가 된다면,</IfP2>
            </IfBox>

            <IfBox2>
                {HomeData.map((item) => (
                    <IfInnerBox key={item.id}>
                        <IfInnerImg src={item.homeWeb} alt={item.title} />
                        <RightContainer>
                            <IfP3>{item.title}</IfP3>
                            <IfP4>{item.explain}</IfP4>
                        </RightContainer>
                    </IfInnerBox>
                ))}
            </IfBox2>
        </IfContainer>
    )
}

export default IfContent;