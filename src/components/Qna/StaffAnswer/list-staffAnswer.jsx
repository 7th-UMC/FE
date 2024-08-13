import styled from "styled-components";
import ItemStaffAnswer from "./item-staffAnswer";
import FilterData from "../../../utils/Qna/filterData";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 7rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.6rem;
    }
`

const ListStaffAnswer = ({ data }) => {
    const category = FilterData.find(item => item.id === data.userId);
    const categoryName = category ? category.name : '';

    return (
        <ListContainer>
            <ItemStaffAnswer
                key={data.id}
                userId={data.userId}
                id={data.id}
                title={data.title}
                body={data.body}
                category={categoryName}
            />
        </ListContainer>
    )
}

export default ListStaffAnswer;