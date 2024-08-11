import styled from "styled-components";
import colors from "../../../../styles/colors";
import ListPeople from "./list-people";

const PeopleContainer = styled.div`
    width: 100%;
    margin-top: 12rem;

    @media screen and (max-width: 430px) {
        margin-top: 5rem;
    }
`

const PeopleP = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        font-size: 2rem;
        line-height: 2.387rem;
    }
`

const People = ({ data }) => {
    return (
        <PeopleContainer>
            <PeopleP>참여</PeopleP>
            <ListPeople data={data} />
        </PeopleContainer>
    )
}

export default People;