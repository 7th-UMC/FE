import styled from "styled-components";
import ItemSNS from "./item-sns";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
`

const ListSNS = ({ data }) => {
    return (
        <ListContainer>
            {data.map((item, index) => (
                <ItemSNS
                    key={index}
                    name={item.name}
                    link={item.link}
                />
            ))}
        </ListContainer>
    )
}

export default ListSNS;