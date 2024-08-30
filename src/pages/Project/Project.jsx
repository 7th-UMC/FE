import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import colors from "../../styles/colors";
import ListProject from "../../components/Project/Project/list-project";
import Spinner from "../../components/Common/Spinner";
import ProjectData from "../../utils/Project/projectData.js";
import useImageLoader from '../../hooks/Project/useImageLoader';

const ProjectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ProjectInnerContainer = styled.div`
    width: 60%;
    margin-top: 3rem;

    @media screen and (max-width: 430px) {
        width: 92%;
        margin-top: 2.441rem;
    }
`;

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
`;

const Project = () => {
    const [projectData, setProjectData] = useState([]);
    
    useEffect(() => {
        setProjectData(ProjectData);
    }, []);
    
    const imageSrc = projectData.length > 0 ? projectData[0].imageSrc : ''; 
    const isLoading = useImageLoader(imageSrc);

    return (
        <div className="pageContainer">
            <ProjectContainer>
                <ProjectInnerContainer>
                    {isLoading ? (
                        <Spinner isLoading={isLoading} />
                    ) : (
                        <>
                            <ProjectP>Project</ProjectP>
                            <ListProject data={projectData} />
                        </>
                    )}
                </ProjectInnerContainer>
            </ProjectContainer>
        </div>
    );
};

export default Project;
