import {CardMamodo,  NameMamodo,  DescMamodo,  ImageMamodo,  LinkMamodo,} from "./styles.js";
import mamodos from "../Mamodo/mamodos.json";

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
    </CardMamodo>
  ));
}
