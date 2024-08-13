import styled from "styled-components";
import colors from "../../../../styles/colors";

const ItemContainer = styled.div`
    width: 100%;
    margin-bottom: 8rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    @media screen and (max-width: 430px) {
        margin-bottom: 4rem;
        gap: 1rem;
    }
`

const PeopleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 430px) {
        gap: 1.2rem;
    }
`

const FeelP = styled.p`
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.341rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 1.671rem;
    }
`

const PartDiv = styled.div`
    width: fit-content;
    padding: 0.8rem 2rem;
    border: 0.1rem solid ${colors.white};
    border-radius: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.864rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        padding: 0.4rem 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.432rem;
    }
`

const FeelP2 = styled.p`
    width: 100%;
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.6rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 2rem;
    }
`

const ItemFeel = ({ feel }) => {
    return (
        <ItemContainer>
            <PeopleContainer>
                <FeelP>{feel.nickname}/{feel.name}</FeelP>
                <PartDiv>{feel.part}</PartDiv>
            </PeopleContainer>
            <FeelP2>{feel.explain}</FeelP2>
        </ItemContainer>
    )
}

export default ItemFeel;