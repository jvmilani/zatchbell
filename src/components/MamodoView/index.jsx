import { View, LeftSide, RightSide } from './styles'
import mamodos from './mamodos'
export default function MamodoView(props) {
    const mamodo = mamodos.map((mamodo) =>
        <>
        <h2>{mamodo.name}</h2>
        <h3>{mamodo.type}</h3>
        </>
        );
    
    // console.log(mamodo);
    const powers = ['Zaker', 'Rashield', 'Jikerdo', 'Bao Zakeruga', 'Zakeruga'];
    const powersView = powers.map((power) => 
        <p>{power}</p>
    );
    return (
        <View>
            <LeftSide></LeftSide>
            <RightSide>
                <h2>{props.name}</h2>
                {mamodo}

            </RightSide>
        </View>
    )
}