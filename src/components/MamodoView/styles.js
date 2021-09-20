import styled from "styled-components";

export const View = styled.div`
    width: 50vw;
    height: 100%;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: ${(props) => props.color};
    border-radius: 5px;
    border: 2px solid rgba(180, 180, 180, 0.5);

    padding: 20px;
    display: flex;
    align-items: center;
    margin: 20px
`

export const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    height: 100%;
    width: 50%;

    h3{
        font-size: 18px;
        font-weight: bold;
        color: #e3e3e3;
    }
    p{
        font-size: 14px;
        font-style: italic;
        color: #e3e3e3;
    }
`
export const powersList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`