import styled from "styled-components";
import colors from "../../../styles/colors";
import Input1 from "../../../assets/images/Qna/input1.png";
import Input2 from "../../../assets/images/Qna/input2.png";

const InputDiv = styled.div`
    width: 100%;
    margin-top: 11.05rem;
    position: relative;

    @media screen and (max-width: 430px) {
        margin-top: 5.5rem;
    }
`

const InputContainer = styled.input`
    width: 100%;
    height: 5.193rem;
    border: none;
    background-color: transparent;
    border-bottom: 0.1rem solid ${colors.qnaColor};
    font-size: 2.8rem;
    line-height: 3.341rem;
    color: ${colors.qnaColor};
    font-weight: 500;
    font-family: Pretendard;

    @media screen and (max-width: 430px) {
        border-bottom: 0.05rem solid ${colors.qnaColor};
        height: 2.647rem;
        font-size: 1.4rem;
        line-height: 1.671rem;
    }

    ::placeholder {
        color: ${colors.qnaColor};
    }
`

const InputImg = styled.img`
    width: 3.5rem;
    position: absolute;
    right: 2rem;

    @media screen and (max-width: 430px) {
        width: 1.75rem;
        right: 1rem;
        content: url(${Input2});
    }
`

const InputQna = ({ type, onChange, value }) => {
    return (
        <InputDiv>
            <InputImg src={Input1} alt="input" />
            <InputContainer 
                placeholder="무엇이든 검색해 보세요"
                type={type}
                onChange={onChange}
                value={value}
            />
        </InputDiv>
    )
}

export default InputQna;