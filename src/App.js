import { Favorites } from './Components/Favorites/Favorites';
import { AllCharacters } from './Components/AllCharacters/AllCharacters';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <div className="App" id='root'>
      <Header />
      <main className='main-container' >
        <Favorites />
        <AllCharacters />
      </main >
    </div>
  );
}

export default App;
