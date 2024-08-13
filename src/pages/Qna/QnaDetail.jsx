import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListQnaDetail from "../../components/Qna/QnaDetail/list-qnaDetail";

const DetailContainer = styled.div`
    width: 60%;
    margin-top: 3rem;
    
    @media screen and (max-width: 430px) {
        width: 92%;
        margin-top: 2.441rem;
    }
`

const QnaP = styled.p`
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.296rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 2.8rem;
        line-height: 3.341rem;
    }
`;


const QnaDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState("");
    //console.log(id);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPost(response.data);
            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchUser();
    }, [id]);

    return (
        <div className="pageContainer" style={{display: "flex", justifyContent: "center"}}>
            <DetailContainer>
                <QnaP>Q&A</QnaP>

                <ListQnaDetail data={post} />
            </DetailContainer>
        </div>
    )
}

export default QnaDetail;