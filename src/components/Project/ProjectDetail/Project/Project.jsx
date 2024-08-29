import styled from "styled-components";
import colors from "../../../../styles/colors";

const ProjectContainer = styled.div`
    width: 100%;
    margin-top: 12rem;

    @media screen and (max-width: 430px) {
        margin-top: 5rem;
    }
`

const ProjectTitle = styled.p`
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    color: ${colors.introColor};

    @media screen and (max-width: 430px) {
        font-size: 2rem;
        line-height: 2.387rem;
    }
`

const ProjectDescription = styled.a`
    display: block;
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 4.6rem;
    color: ${colors.introColor};
    margin-top: 1.6rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 2rem;
        margin-top: 1.2rem;
    }
`

const Project = ({ data }) => {
    return (
        <ProjectContainer>
            <ProjectTitle>프로젝트</ProjectTitle>
            <ProjectDescription href={data.project} target="_blank" rel="noopener noreferrer">
                {data.project}
            </ProjectDescription>
        </ProjectContainer>
    )
}

export default Project;
