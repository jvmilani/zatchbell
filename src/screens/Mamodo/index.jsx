import { useParams } from "react-router-dom";
import mamodos from "./mamodos";
import NotFound from "../NotFound";
import Mamodo from "./Exist";

export default function MamodoPage() {
  let { name } = useParams();
  let mamodoInfo = mamodos.find((mamodoInfos) => {
      return mamodoInfos.name === name;
    }
  )

  if(!mamodoInfo)
    return <NotFound></NotFound>
  else
    return <Mamodo info={name}></Mamodo>
}