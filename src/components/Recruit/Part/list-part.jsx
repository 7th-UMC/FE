import styled from "styled-components";
import ItemPart from "./item-part";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 3.2rem;

    @media screen and (max-width: 1024px) {
        display: block;
        margin-top: 1.95rem;
        gap: 1rem;
    }
`

const ItemAllContainer = styled.div`
    display: flex;
    gap: 3.2rem;
    align-items: center;

    &.second {
        @media screen and (max-width: 1024px) {
            margin-top: 1.4rem;
        }
    }

    @media screen and (max-width: 1024px) {
        gap: 1rem;
    }
`

const ListPart = ({ data }) => {
    const firstPart = data.slice(0, 4);
    const secondPart = data.slice(4);

    return (
        <ListContainer>
            <ItemAllContainer>
                {firstPart.map((item, index) => (
                    <ItemPart
                        key={index}
                        name={item.name}
                    />
                ))}
            </ItemAllContainer>
            <ItemAllContainer className="second">
                {secondPart.map((item, index) => (
                    <ItemPart
                        key={index + firstPart.length}
                        name={item.name}
                    />
                ))}
            </ItemAllContainer>
        </ListContainer>
    );
}

export default ListPart;
