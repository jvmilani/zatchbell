import { CardMamodo, NameMamodo, DescMamodo, ImageMamodo, LinkMamodo, PowersMamodo } from './styles.js'

export default function CardMamodoData(props) {
    return (
        <CardMamodo>
            <ImageMamodo><img src={props.img} alt="mamodo" /></ImageMamodo>
            <NameMamodo>{props.name}</NameMamodo>
            <DescMamodo>{props.desc}</DescMamodo>
            <PowersMamodo><h2>Powers</h2>
            <p>
                <ul>
                    <li>Zaker</li>
                    <li>Rashield</li>
                    <li>Jikerdo</li>
                </ul>
            </p>
            </PowersMamodo>
            <LinkMamodo href={props.adress} target="_blank" value="+ More info">+ More info</LinkMamodo>
        </CardMamodo>
    )

}