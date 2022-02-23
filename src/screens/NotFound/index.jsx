import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';
import { Element404, NotFoundView} from './styles'

export default function NotFound() {
    const [time, setTime] = useState(3);
    let history = useHistory();

    useEffect(() => {
        if (time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (time === 0) {
            history.push('/')
        }
    }, [history,time]);
    return(
        <NotFoundView>
            <h1>Tia te protegerá e você será redirecionado em {time} segundos</h1>
            <Element404></Element404>
        </NotFoundView>

    )
}