// import './App.css';
import { AppM, View } from './styles.js'
import CardMamodoData from './components/cardMamodo'
import MamodoView from './components/MamodoView/'

function App() {
  return (
    <AppM>
      <header className="App-header">
      </header>
      <body>
        <MamodoView></MamodoView>
        {/* <View>
          <CardMamodoData>
          </CardMamodoData>
        </View> */}
      </body>
    </AppM>
  );
}

export default App;
