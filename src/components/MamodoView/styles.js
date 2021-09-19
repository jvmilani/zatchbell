import styled from "styled-components";

export const View = styled.div`
    width: 80vw;
    height: 80vh;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(227, 48, 48, 0.75);
    border-radius: 12px;
    border: 2px solid rgba(255, 40, 40, 0.5);

    padding: 20px;
    display: flex;
    align-items: center;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 100%;
`
export const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
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