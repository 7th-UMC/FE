import React, { useState, useEffect } from "react";
import { API } from "../../../../api/axios";
import styled from "styled-components";
import NotQna from "../../NotQna/NotQna";
import ListFilter from "../../Filter/HomeFilter/list-filter";
import InputQna from "../../QnaHome/Input/input-qna";
import ListStaffQna from "./list-staffQna";
import Modal from "./Modal";

const QnaContainer = styled.div`
    width: 100%;
    margin-top: 3rem;

    @media screen and (max-width: 430px) {
        margin-top: 2.441rem;
    }
`;

const StaffQnaYes = () => {
    const [qna, setQna] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [error, setError] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSet, setCurrentSet] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalId, setModalId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get('api/question/');
                setQna(response.data.result);
                setError(false);
            } catch (error) {
                setError(true);
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <NotQna />;
    }

    useEffect(() => {
        if (selectedId === 0) {
            setFilteredPosts(qna.filter(q => q.title.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            const filtered = qna
                .filter(qna => qna.categoryId === selectedId)
                .filter(qna => qna.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredPosts(filtered);
        }
    }, [searchTerm, selectedId, qna]);

    useEffect(() => {
        setCurrentPage(1);
        setCurrentSet(1);
    }, [selectedId]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const newSet = Math.ceil(pageNumber / 3);
        setCurrentSet(newSet);
    };

    const handleSetChange = (direction) => {
        const newSet = currentSet + direction;
        if (newSet > 0 && newSet <= Math.ceil(filteredPosts.length / 10 / 3)) { 
            setCurrentSet(newSet);
            const newPage = (newSet - 1) * 3 + 1;
            setCurrentPage(newPage);
        }
    };

    const handleTrashClick = (id) => {
        console.log(id);
        setModalId(id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalId(null);
    };

    return (
        <>
            <QnaContainer>
                <ListFilter selectedId={selectedId} onSelect={setSelectedId} />
                <InputQna
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <ListStaffQna
                    data={filteredPosts}
                    currentPage={currentPage}
                    currentSet={currentSet}
                    onPageChange={handlePageChange}
                    onSetChange={handleSetChange}
                    onTrashClick={handleTrashClick}
                />
                {isModalOpen && (
                    <Modal onClose={handleCloseModal} id={modalId}/>
                )}
            </QnaContainer>
        </>
    );
};

export default StaffQnaYes;
