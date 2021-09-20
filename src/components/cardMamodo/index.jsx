import { CardMamodo, NameMamodo, DescMamodo, ImageMamodo, LinkMamodo, PowersMamodo, powersList, View } from './styles.js'
import mamodos from '../MamodoView/mamodos.json'

export default function CardMamodoData() {

    const mamodo = mamodos.map((mamodo) => 

        <CardMamodo color={mamodo.rgb}>
            <ImageMamodo><img src="https://cdn.anisearch.com/images/anime/screen/8/8822/full/354097.jpg" alt="mamodo" /></ImageMamodo>
            <NameMamodo>{mamodo.name}</NameMamodo>
            <DescMamodo>{mamodo.type}</DescMamodo>
            <PowersMamodo><h2>Powers</h2>
                <p>
                    <ul>
                        {
                            Object.keys(mamodo.Ataque).slice(0,3).map((key) => {
                                    const namePower = key;
                                    console.log(namePower);
                                    const listPowers =
                                        <powersList>
                                            <p>{namePower}</p>
                                        </powersList>;
                                    return listPowers;
                                
                            })
                        }
                    </ul>
                </p>
            </PowersMamodo>
            <LinkMamodo href="" target="_blank" value="+ More info">+ More info</LinkMamodo>
        </CardMamodo>
    
    )
    return mamodo;
}