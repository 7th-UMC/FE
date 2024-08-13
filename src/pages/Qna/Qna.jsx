import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import colors from "../../styles/colors";
import NotQna from "../../components/Qna/NotQna/NotQna";
import ListFilter from "../../components/Qna/Filter/HomeFilter/list-filter";
import InputQna from "../../components/Qna/QnaHome/Input/input-qna";
import ButtonPost from "../../components/Qna/QnaHome/Button/button-post";
import ListQna from "../../components/Qna/QnaHome/list-qna";

const QnaContainer = styled.div`
    width: 60%;
    margin-top: 3rem;

    @media screen and (max-width: 430px) {
        width: 92%;
        margin-top: 2.441rem;
    }
`;

const QnaP = styled.p`
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.296rem;
    color: ${colors.white};

    @media screen and (max-width: 430px) {
        font-size: 2.8rem;
        line-height: 3.341rem;
    }
`;

const Qna = () => {
    const [qna, setQna] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [error, setError] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSet, setCurrentSet] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setQna(response.data);
                setError(false);
            } catch (error) {
                setError(true);
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (selectedId === 0) {
            setFilteredPosts(qna.filter(q => q.title.toLowerCase().includes(searchTerm.toLowerCase())));
        } else {
            const filtered = qna
                .filter(qna => qna.userId === selectedId)
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

    return (
        <div className="pageContainer" style={{ display: "flex", justifyContent: "center" }}>
            <QnaContainer>
                <QnaP>Q&A</QnaP>
                <ListFilter selectedId={selectedId} onSelect={setSelectedId} />
                <InputQna
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <ButtonPost />
                <ListQna
                    data={filteredPosts}
                    currentPage={currentPage}
                    currentSet={currentSet}
                    onPageChange={handlePageChange}
                    onSetChange={handleSetChange}
                />
            </QnaContainer>
        </div>
    );
};

export default Qna;
