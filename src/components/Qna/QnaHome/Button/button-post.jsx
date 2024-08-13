import styled from "styled-components";
import colors from "../../../../styles/colors";
import { useNavigate } from "react-router-dom";
import Post1 from "../../../../assets/images/Qna/post1.png";
import Post2 from "../../../../assets/images/Qna/post2.png";

const ButtonContainer = styled.div`
    width: 20.4rem;
    height: 5.2rem;
    border: 0.2rem solid ${colors.recruitColor6};
    border-radius: 0.4rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 5rem;

    @media screen and (max-width: 430px) {
        width: 12rem;
        height: 2.8rem;
        border: 0.1rem solid ${colors.recruitColor6};
        gap: 0.6rem;
        margin-top: 3.1rem;
    }
`

const ButtonImg = styled.img`
    width: 3.2rem;

    @media screen and (max-width: 430px) {
        width: 1.8rem;
        content: url(${Post2});
    }
`

const ButtonP = styled.p`
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 2.625rem;
    color: ${colors.recruitColor6};

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 1.671rem;
    }
`

const ButtonPost = () => {
    const navigate = useNavigate();

    const handlePost = () => {
        navigate("/post");
    }

    return (
        <ButtonContainer onClick={handlePost}>
            <ButtonImg src={Post1} alt="post" />
            <ButtonP>질문 작성하기</ButtonP>
        </ButtonContainer>
    )
}

export default ButtonPost;