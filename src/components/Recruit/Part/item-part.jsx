import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemContainer = styled.div`
    padding: 0.8rem 2rem;
    border: 0.1rem solid ${colors.recruitColor2};
    border-radius: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.864rem;
    color: ${colors.recruitColor2};

    @media screen and (max-width: 430px) {
        font-size: 1.1rem;
        line-height: 1.313rem;
    }
`

const ItemPart = ({ name }) => {
    return (
        <ItemContainer>{name}</ItemContainer>
    )
}

export default ItemPart;