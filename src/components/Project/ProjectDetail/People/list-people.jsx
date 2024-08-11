import styled from "styled-components";
import ItemPeople from "./item-people";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 4rem;

    @media screen and (max-width: 430px) {
        margin-top: 2rem;
    }
`


const ListPeople = ({ data }) => {
    //console.log(data.people);
    const peopleData = data?.people || [];
    //console.log(peopleData);

    return (
        <ListContainer>
            {peopleData.map(person => (
                <ItemPeople 
                    key={person.id} 
                    person={person} 
                />
            ))}
        </ListContainer>
    );
};


export default ListPeople;