import styled from "styled-components";

export const AppM = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
  // overflow-x: hidden;
  justify-content: center;
  align-items: center;
  background-image: url("https://cdn.wallpapersafari.com/45/65/UMRiO7.jpg");
  background-size: cover;
  // background-align:center;
  background-attachment: fixed;
`;

export const View = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 95%;
  // height: 100vh;
  padding: 20px;
  overflow-x: hidden;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-image: url("https://cdn.wallpapersafari.com/45/65/UMRiO7.jpg");
  background-size: cover;
  background-attachment: fixed;
`;

export const Home = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color: rgba(40, 40, 40, 0.5);
  --webkit-backdrop-filter: blur(6px) saturate(180%);
  backdrop-filter: blur(6px) saturate(180%);
`;

export const HomeText = styled.text`
  margin: 30px;
  width: 200px;
  text-align: center;
  color: rgba(220, 30, 30);
  font-weight: 700;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: yellow;
  font-size: 36px;
`;

export const HomeButton = styled.a`
  display: grid;
  place-items: center;
  width: 150px;
  height: 45px;
  border-radius: 2.5px 2.5px 5px 5px;
  color: yellow;
  text-decoration: none;
  font-weight: 700;
  border-bottom: 5px solid yellow;
  background: rgba(255, 30, 30, 0.7);
  transition: ease 0.5s;
  &:hover {
    color: rgba(220, 30, 30);
    background: yellow;
  }
`;
