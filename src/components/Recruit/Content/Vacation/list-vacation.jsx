import styled from "styled-components";
import colors from "../../../../styles/colors";
import ItemVacation from "./item-vacation";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 8rem;

    @media screen and (max-width: 430px) {
        margin-top: 4rem;
    }
`

const ListP = styled.p`
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.387rem;
    color: ${colors.white};
    margin-bottom: 2rem;

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.671rem;
        margin-bottom: 1.4rem;
    }
`

const ListVacation = ({ data }) => {
    return (
        <>
            <ListContainer>
                <ListP>[방학 중]</ListP>
                {data.map((item, index) => (
                    <ItemVacation
                        key={index}
                        explain={item.explain}
                    />
                ))}
            </ListContainer>
        </>
    )
}

export default ListVacation;