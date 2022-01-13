import {
  CardMamodo,
  NameMamodo,
  DescMamodo,
  ImageMamodo,
  LinkMamodo,
} from "./styles.js";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import Mamodo from "../Mamodo/";
import mamodos from "../MamodoView/mamodos.json";

export default function CardMamodoData() {
  return mamodos.map((mamodo) => (
    <CardMamodo color={mamodo.rgba} border={mamodo.rgb}>
      <ImageMamodo border={mamodo.rgb}>
        <img
          src={
            mamodo.img ??
            "https://cdn.anisearch.com/images/anime/screen/8/8822/full/354097.jpg"
          }
          alt="mamodo"
        />
      </ImageMamodo>
      <NameMamodo border={mamodo.rgb}>{mamodo.name}</NameMamodo>
      <DescMamodo color={mamodo.rgb}>{mamodo.type}</DescMamodo>
      <LinkMamodo href={`/mamodo/${mamodo.name}`} btncolor={mamodo.rgb}>
        + Sobre {mamodo.name}
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
