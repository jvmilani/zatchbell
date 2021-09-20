import styled from "styled-components";

export const View = styled.div`
    width: 0%;

    height: 100vh;
    overflow-x: hidden;
    padding: 20px;
    display: flex;
    align-items: center;
    margin: 20px
`

export const CardMamodo = styled.div`
    width: 300px;
    height: 500px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: ${(props) => props.color};
    border-radius: 4px;
    border: 2px solid rgba(40, 40, 40, 0.25);

    padding: 20px;
    margin: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ImageMamodo = styled.div`
    width: 250px;
    height: 250px;
    img{
        border-radius: 50%;
        height: 100%;
        width: 100%;
        object-fit:cover;
    }
`

export const NameMamodo = styled.text`
    font-size: 24px;
    font-weight: bold;
    color: #9e9e9e;
`

export const DescMamodo = styled.text`
    font-size: 14px;
    font-style: italic;
    color: #e3e3e3;
`

export const powersList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const LinkMamodo = styled.a`
    width: 150px;
    height: 40px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9e9e9e;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(84, 23, 29, 1);
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.125);
`
export const PowersMamodo = styled.div`
    text-align: center;
    h2{
        font-style: italic;
        font-size: 18px;
        font-weight: bold;
        color: #404040;
    }
    ul{
        text-decoration: none;
    }
    p{
        text-align: center;
        font-size:14px;
        color: #404040;
    }
`