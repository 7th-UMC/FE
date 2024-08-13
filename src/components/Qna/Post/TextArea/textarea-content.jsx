import styled from "styled-components";
import colors from "../../../../styles/colors";

const TextAreaContainer = styled.textarea`
    width: 100%;
    height: 56rem;
    background: rgba(210, 210, 210, 0.2);
    outline: none;
    border: none;
    border-radius: 0.4rem;
    margin-top: 3.6rem;
    padding: 1rem;
    font-family: Pretendard;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 4.6rem;
    color: ${colors.qnaColor};
    cursor: pointer;
    resize: none;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    @media screen and (max-width: 430px) {
        height: 28rem;
        border-radius: 0.2rem;
        margin-top: 1.9rem;
        font-size: 1.3rem;
        line-height: 2.3rem;
    }
`

const TextAreaContent = ({ type, onChange, value }) => {
    return (
        <TextAreaContainer
            placeholder="질문 내용을 작성해주세요"
            type={type}
            onChange={onChange}
            value={value}
        />
    )
}

export default TextAreaContent;