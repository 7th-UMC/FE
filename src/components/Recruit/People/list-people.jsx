import styled from "styled-components";
import colors from "../../../styles/colors";
import ItemPeople from "./item-people";

const ListContainer = styled.div`
    margin-top: 2rem;
`

const ListP = styled.p`
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.387rem;
    color: ${colors.recruitColor};

    @media screen and (max-width: 430px) {
        font-size: 1.2rem;
        line-height: 1.313rem;
    }
`

const ListPeople = ({ data }) => {
    return (
        <ListContainer>
            {data.map((item, index) => (
                <ItemPeople
                    key={index}
                    explain={item.explain}
                />
            ))}
            <ListP>*졸업생은 신청이 불가합니다</ListP>
        </ListContainer>
    )
}

export default ListPeople;