import styled from "styled-components";
import ItemQnaDetail from "./item-qnaDetail";
import FilterData from "../../../utils/Qna/filterData";

const ListContainer = styled.div`
    width: 100%;
    margin-top: 7rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.6rem;
    }
`

const ListQnaDetail = ({ data }) => {
    const category = FilterData.find(item => item.id === data.userId);
    const categoryName = category ? category.name : '';

    return (
        <ListContainer>
            <ItemQnaDetail
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

export default ListQnaDetail;