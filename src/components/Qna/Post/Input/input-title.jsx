import colors from "../../../../styles/colors";
import styled from "styled-components";

const InputContainer = styled.input`
    width: 100%;
    height: 9rem;
    border: none;
    border-radius: 0.4rem;
    margin-top: 3.6rem;
    background: rgba(210, 210, 210, 0.2);
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    line-height: 4.6rem;
    font-weight: 400;
    color: ${colors.qnaColor};
    font-family: Pretendard;
    cursor: pointer;

    @media screen and (max-width: 430px) {
        height: 4rem;
        border-radius: 0.2rem;
        margin-top: 1.8rem;
        font-size: 1.4rem;
        line-height: 2.3rem;
    }
`

const InputTitle = ({ type, onChange, value }) => {
    return (
        <InputContainer
            placeholder="제목은 40자 이내로 작성해주세요"
            type={type}
            onChange={onChange}
            value={value}
        />
    )
}

export default InputTitle;