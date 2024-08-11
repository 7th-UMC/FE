import styled from "styled-components";
import ItemInformation from "./item-information";

const ListContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const ListInformation = ({ data }) => {
    return (
        <ListContainer>
            {data.map((item, index) => (
                <ItemInformation
                    key={index}
                    explain={item.explain}
                />
            ))}
        </ListContainer>
    )
}

export default ListInformation;