import styled from "styled-components";
import colors from "../../styles/colors";
import { useParams } from "react-router-dom";


const ProjectDetail = () => {
    const { id } = useParams();

    console.log(id);

    return (
        <>
        </>
    )
}

export default ProjectDetail;