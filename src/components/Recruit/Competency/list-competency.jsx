import ItemCompetency from "./item-competency";
import styled from "styled-components";

const ListContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const ListCompetency = ({ data }) => {
    return (
        <ListContainer>
            {data.map((item, index) => (
                <ItemCompetency
                    key={index}
                    name={item.name}
                    explain={item.explain}
                />
            ))}
        </ListContainer>
    )
}

export default ListCompetency;