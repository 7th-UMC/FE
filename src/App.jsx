import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import GlobalStyle from './styles/globalStyles';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import ProjectDetail from './pages/Project/ProjectDetail';
import Qna from './pages/Qna/Qna';
import QnaDetail from './pages/Qna/QnaDetail';
import Post from './pages/Qna/Post';
import Photo from './pages/Photo/Photo';
import Recruit from './pages/Recruit/Recruit';

import StaffLogin from "./pages/StaffLogin/StaffLogin";
import StaffQna from "./pages/StaffQna/StaffQna";
import StaffAnswer from './pages/StaffQna/StaffAnswer';
import StaffEdit from './pages/StaffQna/StaffEdit';

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
          <Route path="/qna/:id" element={<QnaDetail />} />
          <Route path="/post" element={<Post />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/recruit" element={<Recruit />} />

          <Route path="/stafflogin" element={<StaffLogin />} />
          <Route path="/staffqna" element={<StaffQna />} />
          <Route path="/staffanswer/:id" element={<StaffAnswer />} />
          <Route path="/staffedit/:id" element={<StaffEdit />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;