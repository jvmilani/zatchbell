import {
  View,
  LeftSide,
  RightSide,
  Powers,
  Categories,
  Atacks,
  Defenses,
  Transform,
} from "./styles";
import { useParams } from "react-router-dom";
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
        <img src={mamodo.img} alt="" />
        <h2>{mamodo.name}</h2>
        <h3>{mamodo.type}</h3>
        <p>{mamodo.BookColor}</p>
      </LeftSide>

      <RightSide>
        <Powers color={mamodo.rgba}>Powers</Powers>
        <Categories>
          <Atacks color={mamodo.rgb}> ⚔️Atacks</Atacks>
          <Defenses color={mamodo.rgb}> 🛡️Defenses</Defenses>
          <Transform color={mamodo.rgb}> 💫Transform</Transform>
        </Categories>

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
