import { View, LeftSide, RightSide, powersList } from './styles'
import mamodos from './mamodos'
export default function MamodoView() {

    const mamodo = mamodos.map((mamodo) =>

        <View color={mamodo.rgb}>
            <LeftSide>
                <h2>{mamodo.name}</h2>
                <h3>{mamodo.type}</h3>
                <p>{mamodo.BookColor}</p>
            </LeftSide>

            <RightSide>
                <h2>Powers</h2>
                <ul>
                {
                    Object.keys(mamodo.Ataque).map((key) => {
                        const namePower = key;
                        const descPower = mamodo.Ataque[key];
                        console.log(namePower, descPower);
                        const listPowers = 
                        <powersList>
                            <h4>{namePower}</h4>
                            <p> {descPower}</p>
                        </powersList>;
                        return listPowers;
                    })
                }
                </ul>

            </RightSide>
        </View>
    );

    // console.log(mamodo);
    // const powers = ['Zaker', 'Rashield', 'Jikerdo', 'Bao Zakeruga', 'Zakeruga'];
    // const powersView = powers.map((power) => 
    //     <p>{power}</p>
    // );
    return (
        [mamodo]
    )
}