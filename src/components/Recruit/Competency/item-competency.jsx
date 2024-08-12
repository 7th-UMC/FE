import styled from "styled-components";
import colors from "../../../styles/colors";

const ItemP = styled.p`
    font-size: 2rem;
    font-weight: 400;
    line-height: 3.8rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 2.6rem;
    }
`

const ItemCompetency = (props) => {
    const { name, explain } = props;

    return (
        <ItemP>{name} : {explain} </ItemP>
    )
}

export default ItemCompetency;