import { View, Home, HomeButton, HomeText } from "./styles.js";
import CardMamodoData from "./screens/cardMamodo";
import logo from "./img/Zb_logo.png";
import Mamodo from "./screens/Mamodo";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./screens/NotFound/";

export default function Routes() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <View>
            <Home>
              <img src={logo} alt="Mamodo" />
              <HomeText>Welcome to Zatchbell</HomeText>
              <HomeButton href="/mamodo/">Zaker ⚡</HomeButton>
            </Home>

            </View>
          </Route>
          <Route exact path="/mamodo/">
            <View>
              <CardMamodoData />
            </View>
          </Route>
          <Route path="/mamodo/:name">
            <View>
            <Mamodo />
            </View>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          <Route path="/mamodo/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
}
