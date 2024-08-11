import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";
import ListProject from "../../components/Project/Project/list-project";
import ProjectData from "../../utils/Project/projectData.js";

const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ProjectInnerContainer = styled.div`
    width: 60%;
    margin-top: 3rem;

    @media screen and (max-width: 430px) {
        width: 92%;
        margin-top: 2.441rem;
    }
`

const ProjectP = styled.p`
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.296rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 3.341rem;
    }
`

const Project = () => {
    const [projectData, setProjectData] = useState(ProjectData);

    useEffect(() => {
        setProjectData(ProjectData);
        //console.log(projectData);
    }, []);

    return (
        <div className="pageContainer">
            <ProjectContainer>
                <ProjectInnerContainer>
                    <ProjectP>Project</ProjectP>

                    <ListProject data={projectData}/>
                </ProjectInnerContainer>
            </ProjectContainer>
        </div>
    )
}

export default Project;