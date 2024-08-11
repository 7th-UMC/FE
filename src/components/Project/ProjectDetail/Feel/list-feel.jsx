import styled from "styled-components";
import ItemFeel from "./item-feel";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 3.4rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.4rem;
    }
`

const ListFeel = ({ data }) => {
    const feelData = data?.feel || [];
    //console.log(feelData);

    return (
        <ListContainer>
            {feelData.map(feel => (
                <ItemFeel 
                    key={feel.id} 
                    feel={feel} 
                />
            ))}
        </ListContainer>
    )
}

export default ListFeel;