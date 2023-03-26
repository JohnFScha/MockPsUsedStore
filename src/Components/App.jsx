import './App.scss';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings={'Welcome!'} />
    </div>
  );
}

export default App;
