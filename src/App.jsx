import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/globalStyles';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import ProjectDetail from './pages/Project/ProjectDetail';
import Qna from './pages/Qna/Qna';
import Photo from './pages/Photo/Photo';
import Recruit from './pages/Recruit/Recruit';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/recruit" element={<Recruit />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;