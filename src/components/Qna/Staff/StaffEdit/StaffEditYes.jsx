import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListStaffEdit from "./list-staffEdit";

const StaffEditYes = () => {
    const { id } = useParams();
    const [post, setPost] = useState("");
    //console.log(id);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setPost(response.data);
            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchUser();
    }, [id]);

    return (
        <ListStaffEdit data={post} />
    )
}

export default StaffEditYes;