import { View, LeftSide, RightSide, powersList } from "./styles";
import { useRouteMatch, useParams } from "react-router-dom";
import mamodos from "./mamodos";

export default function Mamodo() {
  let { name } = useParams();
  console.log(name);
  let mamodo = mamodos.find(function (mamodo) {
    return mamodo.name === name;
  });
  return (
    <View color={mamodo.rgb}>
      <LeftSide>
        <img
          src="https://cdn.anisearch.com/images/anime/screen/8/8822/full/354097.jpg"
          alt=""
        />
        <h2>{mamodo.name}</h2>
        <h3>{mamodo.type}</h3>
        <p>{mamodo.BookColor}</p>
      </LeftSide>

      <RightSide>
        <h2>Powers</h2>
        <ul>
          {Object.keys(mamodo.Ataque).map((key) => {
            const namePower = key;
            const descPower = mamodo.Ataque[key];
            console.log(namePower, descPower);
            const listPowers = (
              <powersList>
                <h4>{namePower}</h4>
                <p> {descPower}</p>
              </powersList>
            );
            return listPowers;
          })}
        </ul>
      </RightSide>
    </View>
  );
}
