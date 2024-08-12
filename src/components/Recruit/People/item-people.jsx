import styled from "styled-components";
import colors from "../../../styles/colors";
import People1 from "../../../assets/images/Recruit/People/people1.png";
import People2 from "../../../assets/images/Recruit/People/people2.png";

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 430px) {
        margin-bottom: 1.4rem;
    }
`

const ItemImg = styled.img`
    width: 2.4rem;

    @media screen and (max-width: 430px) {
        width: 1.8rem;
        content: url(${People2});
    }
`

const ItemP = styled.p`
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }
`

const ItemPeople = ({ explain }) => {
    return (
        <ItemContainer>
            <ItemImg src={People1} alt="people" />
            <ItemP>{explain}</ItemP>
        </ItemContainer>
    )
}

export default ItemPeople;