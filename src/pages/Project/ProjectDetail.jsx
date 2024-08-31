import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import ProjectData from '../../utils/Project/projectData';
import Intro from '../../components/Project/ProjectDetail/Intro/Intro';
import People from '../../components/Project/ProjectDetail/People/People';
import Feel from '../../components/Project/ProjectDetail/Feel/Feel';
import Project from '../../components/Project/ProjectDetail/Project/Project';
import Spinner from '../../components/Common/Spinner';
import useImageLoader from '../../hooks/Project/useImageLoader';

const DetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BackgroundImg = styled.img`
    width: 100%; 
`;

const DetailContainer2 = styled.div`
    width: 60%;
    margin-top: 4rem;

    @media screen and (max-width: 430px) {
        width: 92%;
        margin-top: 1.641rem;
    }
`;

const ProjectDetail = () => {
    const { id } = useParams();
    const project = ProjectData.find(p => p.id === parseInt(id));

    const imageSrc = window.innerWidth <= 430 ? project.projectDetailMobile : project.projectDetailWeb;
    const isLoading = useImageLoader(imageSrc);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="pageContainer">
            {isLoading ? (
                <Spinner isLoading={isLoading} />
            ) : (
                <DetailContainer>
                    <BackgroundImg src={imageSrc} alt="project" />
                    <DetailContainer2>
                        <Intro data={project} />
                        {project.project && <Project data={project} />}
                        <People data={project} />
                        <Feel data={project} />
                    </DetailContainer2>
                </DetailContainer>
            )}
        </div>
    );
};

export default ProjectDetail;
