import styled from "styled-components";
import colors from "../../../styles/colors";
import Project1 from "../../../assets/images/Project/Project/project1.png";
import Project2 from "../../../assets/images/Project/Project/project2.png";
import { useNavigate } from "react-router-dom";

const ItemContainer = styled.div`
    width: calc(100% - 0rem / 2);
    border: none;
    border-radius: 0.4rem;
    overflow: hidden;
    margin-bottom: 10rem;

    @media screen and (max-width: 430px) {
        border-radius: 0.2rem;
        margin-bottom: 2.6rem;
    }
`

const BackgroundImg = styled.img`
    width: 100%;
    cursor: pointer;

    @media screen and (max-width: 430px) {
        content: url(${Project2});
    }
`

const ProjectP = styled.p`
    width: 100%;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 3.341rem;
    color: ${colors.introColor};
    margin-top: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: 430px) {
        font-size: 1.6rem;
        margin-top: 1.6rem;   
    }
`

const ProjectP2 = styled.p`
    width: 100%;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 2.864rem;
    color: ${colors.introColor};
    margin-top: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 1.671rem;
    }
`

const ItemProject = ({ id, name, email }) => {
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/project/${id}`);
    }

    return (
        <ItemContainer>
            <BackgroundImg src={Project1} alt="project" onClick={handleDetail}/>
            <ProjectP>{name}</ProjectP>
            <ProjectP2>{email}</ProjectP2>
        </ItemContainer>
    )
}

export default ItemProject;