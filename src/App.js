// import './App.css';
import  { AppM }  from './styles.js'
import CardMamodoData from './components/cardMamodo'
import MamodoView from './components/MamodoView/'

function App() {
  return (
    <AppM>
      <header className="App-header">
        {/* <CardMamodoData name="Zatch" desc="Zatch é da boa" img="https://cdn.anisearch.com/images/anime/screen/8/8822/full/354097.jpg" adress="https://www.colorhexa.com/d73a49"></CardMamodoData> */}
        <MamodoView></MamodoView>
      </header>
    </AppM>
  );
}

export default App;
