import { AppM, View, Home, HomeButton, HomeText } from "./styles.js";
import CardMamodoData from "./components/cardMamodo";
import logo from "./img/Zb_logo.png";
import Mamodo from "./components/Mamodo/";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <AppM>
        <View>
          <Switch>
            <Route exact path="/">
              <Home>
                <img src={logo} alt="Mamodo" />
                <HomeText>⚡ Welcome to Zatchbell ⚡</HomeText>
                <HomeButton href="/mamodo/">Zaker ⚡</HomeButton>
              </Home>
            </Route>
            <Route exact path="/mamodo/">
              <CardMamodoData />
            </Route>
            <Route path="/mamodo/:name">
              <Mamodo />
            </Route>
          </Switch>
        </View>
      </AppM>
    </Router>
  );
}
// function Mamodo() {
//   let { name } = useParams();
//   console.log(name);
//   let mamodo = mamodos.find(function (mamodo) {
//     return mamodo.name === name;
//   });
//   return (
//     <View color={mamodo.rgb}>
//       <LeftSide>
//         <img
//           src="https://cdn.anisearch.com/images/anime/screen/8/8822/full/354097.jpg"
//           alt=""
//         />
//         <h2>{mamodo.name}</h2>
//         <h3>{mamodo.type}</h3>
//         <p>{mamodo.BookColor}</p>
//       </LeftSide>

//       <RightSide>
//         <h2>Powers</h2>
//         <ul>
//           {Object.keys(mamodo.Ataque).map((key) => {
//             const namePower = key;
//             const descPower = mamodo.Ataque[key];
//             console.log(namePower, descPower);
//             const listPowers = (
//               <powersList>
//                 <h4>{namePower}</h4>
//                 <p> {descPower}</p>
//               </powersList>
//             );
//             return listPowers;
//           })}
//         </ul>
//       </RightSide>
//     </View>
//   );
// }
