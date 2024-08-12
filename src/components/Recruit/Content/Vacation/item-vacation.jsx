import styled from "styled-components";
import colors from "../../../../styles/colors";
import Content1 from "../../../../assets/images/Recruit/Content/content1.png";
import Content2 from "../../../../assets/images/Recruit/Content/content2.png";

const ItemContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 1.1rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 430px) {
        gap: 0.8rem;
        margin-bottom: 1.1rem;
    }
`

const ContentImg = styled.img`
    width: 2.4rem;

    @media screen and (max-width: 430px) {
        content: url(${Content2});
        width: 1.8rem;
    }
`

const ContentP = styled.p`
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 1.6rem;
    }
`

const ItemVacation = ({ explain }) => {
    return (
        <ItemContainer>
            <ContentImg src={Content1} alt="content" />
            <ContentP>{explain}</ContentP>
        </ItemContainer>
    )
}

export default ItemVacation;