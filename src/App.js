import { AppM, View } from "./styles.js";
import CardMamodoData from "./components/cardMamodo";
import mamodos from "./components/Mamodo/mamodos";
import { LeftSide, RightSide, powersList } from "./components/Mamodo/styles";

import MamodoView from "./components/MamodoView/";
import Mamodo from "./components/Mamodo/";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function App() {
  const Home = CardMamodoData;
  return (
    <Router>
      <AppM>
        <View>
          <Switch>
            <Route exact path="/">
              <MamodoView />
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
