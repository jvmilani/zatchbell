import {
  CardMamodo,
  NameMamodo,
  DescMamodo,
  ImageMamodo,
  LinkMamodo,
  PowersMamodo,
  PowersList,
} from "./styles.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import Mamodo from "../Mamodo/";
import mamodos from "../MamodoView/mamodos.json";

export default function CardMamodoData() {
  return mamodos.map((mamodo) => (
    <CardMamodo color={mamodo.rgb}>
      <ImageMamodo>
        <img
          src="https://cdn.anisearch.com/images/anime/screen/8/8822/full/354097.jpg"
          alt="mamodo"
        />
      </ImageMamodo>
      <NameMamodo>{mamodo.name}</NameMamodo>
      <DescMamodo>{mamodo.type}</DescMamodo>
      <PowersMamodo>
        <h2>Powers</h2>
        <p>
          <ul>
            {Object.keys(mamodo.Ataque)
              .slice(0, 3)
              .map((key) => {
                const namePower = key;
                const listPowers = (
                  <PowersList>
                    <p>{namePower}</p>
                  </PowersList>
                );
                return listPowers;
              })}
          </ul>
        </p>
      </PowersMamodo>
      <LinkMamodo href="" target="_blank" value="+ More info">
        <Link to={`/mamodo/${mamodo.name}`}>+ Sobre {mamodo.name} </Link>
      </LinkMamodo>
      <Switch>
        <Route exact path="mamodo/">
          <h3>Choose your mamodo</h3>
        </Route>
        <Route path="mamodo/:name">
          <Mamodo />
        </Route>
      </Switch>
    </CardMamodo>
  ));
}
