import {
    View,
    LeftSide,
    RightSide,
    Categories,
    PowersList,
    TypePowers,
} from "./styles";
import mamodos from "./mamodos";
import { useState } from "react";
import BackButton from "../../components/backButton";

export default function Mamodo(props) {
    let mamodoInfo = mamodos.find((mamodoInfos) => {
            return mamodoInfos.name === props.info;
    });
    const [type, setType] = useState('Ataque')
    const [change, setChange] = useState(0);
    const [powers, setPower] = useState(mamodoInfo.Ataque);

    const [ListPowerRender, setList] = useState(
        Object.keys(powers).map((power, key) => {
            const namePower = power;
            const descPower = mamodoInfo[type][power];
            return (<PowersList key={key}>
                <h4>{namePower}</h4>
                <p> {descPower}</p>
            </PowersList>)
        }))

    function changeType(types) {
        setType(types);
        setPower(mamodoInfo[types]);
        setChange(1)
    }

    if (change) {
        setChange(0)
        setList(
            Object.keys(powers).map((power, key) => {
                const namePower = power;
                const descPower = mamodoInfo[type][power];
                return (<PowersList key={key}>
                    <h4>{namePower}</h4>
                    <p> {descPower}</p>
                </PowersList>)
            }))
    }

    const Cates = Object.keys(mamodoInfo).slice(7);

    return (
        <View color={mamodoInfo.rgb} >
            <LeftSide>
                <BackButton />
                <img src={mamodoInfo.img} alt="" />
                <h2>{mamodoInfo.name}</h2>
                <h3>{mamodoInfo.type}</h3>
                <p>{mamodoInfo.BookColor}</p>
            </LeftSide>

            <RightSide>
                <Categories>
                    {Object.entries(Cates).map((cate, index) => {
                        var cateText;

                        switch (cate[1]) {
                            case 'Ataque':
                                cateText = '👊 Ataque'
                                break;
                            case 'Defesa':
                                cateText = '🛡 Defesa'
                                break;
                            case 'Assistencia':
                                cateText = '⭐ Assistência'
                                break;
                            case 'Transformacao':
                                cateText = '🎭 Transformação'
                                break;
                            default:
                                cateText = cate[1]
                                break;
                        }

                        return <TypePowers color={mamodoInfo.rgb} onClick={() => changeType(`${cate[1]}`)}> {cateText} </TypePowers>
                    })}
                </Categories>


                {ListPowerRender}

            </RightSide>
        </View >
    );
}
