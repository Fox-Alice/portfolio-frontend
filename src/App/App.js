import { Routes, Route } from 'react-router-dom';
// import Header from '../Header/Header';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';


import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/about" element={<AboutMe/>} />

      </Routes>
    </div>
  );
}

export default App;
