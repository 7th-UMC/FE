import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../../../api/axios";
import ItemStaffEdit from "./item-staffEdit";

const StaffEditYes = () => {
    const { id } = useParams();
    const [post, setPost] = useState("");
    //console.log(id);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await API.get(`api/question/${id}`);
                setPost(response.data.result);
                console.log(post);
            } catch (err) {
                console.error("Error:", err);
            }
        };

        fetchUser();
    }, [id]);

    return (
        <>
            <ItemStaffEdit data={post} />
        </>
    )
}

export default StaffEditYes;