import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import ItemProject from './item-project';

const ListContainer = styled.div`
    width: 100%;
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.588rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.6rem;
        gap: 1.2rem;
    }
`

const ListProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setProjects(response.data);
                //console.log(response.data);
            } catch (err) {
                setError(err);
            }
        };

        fetchProjects();
    }, []);

    return (
        <ListContainer>
            {projects.map(projects => (
                <ItemProject 
                    key={projects.id}
                    id={projects.id}
                    name={projects.name}
                    email={projects.email}
                />
            ))}
        </ListContainer>
    )
}

export default ListProject;