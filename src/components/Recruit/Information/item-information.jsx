import styled from "styled-components";
import colors from "../../../styles/colors";
import Information1 from "../../../assets/images/Recruit/Information/information1.png";
import Information2 from "../../../assets/images/Recruit/Information/information2.png";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1.2rem;
    align-items: flex-start;
    margin-bottom: 2rem;

    @media screen and (max-width: 430px) {
        gap: 0.8rem;
        margin-bottom: 1.4rem;
    }
`

const ItemImg = styled.img`
    width: 2.4rem;

    @media screen and (max-width: 430px) {
        width: 1.8rem;
        content: url(${Information2});
    }
`

const ItemP = styled.p`
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
    }
`

const ItemInformation = ({ explain }) => {
    return (
        <ItemContainer>
            <ItemImg src={Information1} alt="information" />
            <ItemP>{explain}</ItemP>
        </ItemContainer>
    )
}

export default ItemInformation;