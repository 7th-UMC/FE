import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemContainer = styled.div`
    padding: 0.8rem 2rem;
    border: 0.1rem solid ${colors.white};
    border-radius: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 2.864rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 1.313rem;
    }
`

const ItemPart = ({ name }) => {
    return (
        <ItemContainer>{name}</ItemContainer>
    )
}

export default ItemPart;