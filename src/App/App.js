import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
      <Route exact path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
