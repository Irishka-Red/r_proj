import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';
import CardList from './components/cardList/CardList'

function App() {
  return (
    <div className="App">
      < Header />
      <Card/>
      <CardList/>
      < Footer/>
    </div>
  );
}

export default App;
