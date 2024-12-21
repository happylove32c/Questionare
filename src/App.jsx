import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Players from './components/Players';
import Settings from './components/Settings';
import Names from './components/Names';
import Questions from './components/Questions';
import Layout from './components/parts/Layout';
import Answers from './components/Answers';

const App = () => {
  return (
  <>
    <Router>
      <Layout>     
        <Routes>
          <Route path="/questions" element={<Questions />} />
          <Route path="/names" element={<Names />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/players" element={<Players />} /> 
          <Route path="/" element={<Login />} />
          <Route path="/answers" element={<Answers />} />
        </Routes>
      </Layout> 
    </Router>
  </>
  );
};

export default App;
