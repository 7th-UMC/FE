import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../api/axios";
import ItemStaffAnswer from "./item-staffAnswer";


const StaffAnswerYes = () => {
    const { id } = useParams();
    const [post, setPost] = useState("");
    //console.log(id);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await API.get(`api/question/${id}`);
                setPost(response.data.result);
            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchUser();
    }, [id]);

    return (
        <ItemStaffAnswer data={post} />
    )
}

export default StaffAnswerYes;