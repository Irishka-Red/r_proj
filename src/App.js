import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cards from './components/card/Cards';
import CardList from './components/cardList/CardList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <Router>
          <div className="App">
      < Header />
      <NavBar/>
      <Routes>
        <Route path="/" element={<CardList/>}/>
        <Route path="card" element={<Cards/>}/>
      </Routes>
      < Footer/>
    </div>
    </Router>
  );
}

export default App;
