import './App.scss';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
