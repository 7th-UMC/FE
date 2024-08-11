import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
`

const NumberCircle = styled.div`
    width: 3.2rem;
    height: 3.2rem;
    border: none;
    border-radius: 50%;
    background: ${colors.white};
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.387rem;
    color: ${colors.recruitColor5};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 1.2rem;

    @media screen and (max-width: 430px) {
        width: 2rem;
        height: 2rem;
        font-size: 1.4rem;
        line-height: 1.671rem;
        margin-right: 0.8rem;
    }
`

const ItemP = styled.p`
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.387rem;
    color: ${colors.white};
    min-width: 29.382rem;

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 1.671rem;
        min-width: 18.125rem;
    }
`

const ItemP2 = styled.p`
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.387rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
    }
`

const ItemRecruitDate = (props) => {
    const {id, name, start, bar, end} = props;

    return (
        <ItemContainer>
            <NumberCircle>{id}</NumberCircle>
            <ItemP>{name}</ItemP>
            <ItemP2>{start} {bar} {end}</ItemP2>
        </ItemContainer>
    )
}

export default ItemRecruitDate;