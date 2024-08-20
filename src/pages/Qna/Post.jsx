import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../api/axios";
import styled from "styled-components";
import colors from "../../styles/colors";
import ListFilter from "../../components/Qna/Filter/PostFilter/list-filter";
import InputTitle from "../../components/Qna/Post/Input/input-title";
import TextAreaContent from "../../components/Qna/Post/TextArea/textarea-content";

const PostContainer = styled.div`
    width: 60%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 430px) {
        width: 92%;
        margin-top: 2.441rem;
    }
`

const QnaP = styled.p`
    width: 100%;
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.296rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 2.8rem;
        line-height: 3.341rem;
    }
`;

const QnaP2 = styled(QnaP)`
    width: 100%;
    font-weight: 700;
    color: ${colors.introColor};
    margin-top: 7rem;

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 2.148rem;
        margin-top: 2.6rem;
    }
`

const QnaP3 = styled.p`
    width: 100%;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 3.819rem;
    color: ${colors.introColor};
    margin-top: 7.6rem;

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        line-height: 1.909rem;
        margin-top: 3.84rem;
    }
`

const QnaP4 = styled(QnaP3)`
    margin-top: 9rem;

    @media screen and (max-width: 430px) {
        margin-top: 3.841rem;
    }
`

const UploadButton = styled.button`
    width: 60rem;
    height: 10rem;
    border: none;
    border-radius: 0.8rem;
    background-color: ${props => props.disabled ? 'rgba(210, 210, 210, 0.2)' : colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Pretendard;
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 3.819rem;
    color: ${props => props.disabled ? 'rgba(255, 255, 255, 0.5)' : colors.footerColor};
    margin: 12rem 0 8rem 0;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    @media screen and (max-width: 430px) {
        width: 20rem;
        height: 4.4rem;
        border-radius: 0.4rem;
        font-size: 1.8rem;
        line-height: 2.148rem;
    }
`;

const Post = () => {
    const [selectedId, setSelectedId] = useState(1);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const isButtonDisabled = !selectedId || !title.trim() || !content.trim();
    const navigate = useNavigate();

    useEffect(() => {
        //console.log('id:', selectedId);
    }, [selectedId]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    //console.log(title);

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    
    const handleUpload = async () => {
        try {
            const response = await API.post('api/question', {
                categoryId: selectedId,
                title: title,
                content: content
            });
            console.log(response.data);
            alert("질문이 등록되었습니다.");
            navigate('/qna');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="pageContainer" style={{display: "flex", justifyContent: "center"}}>
            <PostContainer>
                <QnaP>Q&A</QnaP>
                <QnaP2>질문 작성하기</QnaP2>

                <ListFilter selectedId={selectedId} onSelect={setSelectedId} />

                <QnaP3>질문 제목</QnaP3>
                <InputTitle
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                />

                <QnaP4>질문 내용</QnaP4>
                <TextAreaContent 
                    type="text"
                    value={content}
                    onChange={handleContentChange}
                />

                <UploadButton onClick={handleUpload} disabled={isButtonDisabled}>업로드하기</UploadButton>
            </PostContainer>
        </div>
    )
}

export default Post;