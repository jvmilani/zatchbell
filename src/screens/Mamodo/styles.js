import styled from "styled-components";

export const View = styled.div`
  display: flex;
  width: 90vw;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: ${(props) => props.color};
  border-radius: 5px;
  border: 2px solid rgba(180, 180, 180, 0.5);
  padding: 20px;
  align-items: center;
  margin: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-bottom: 10px;
    justify-content: center;
    // height: 100%;
    padding: 25px;
  }
`;

export const Categories = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 10px 10px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const TypePowers = styled.a`
  padding-bottom: 10px;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => props.color};
`;

export const Powers = styled.text`
  width: 100%;
  text-align: center;
  font-size: 36px;
  color: #404040;
  background-color: ${(props) => props.color};
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  // min-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    // height: 100%;
    width: 75%;
    object-fit: cover;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 50vw;
    height: auto;
    margin-top: 50px;
  }
`;

export const RightSide = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  flex-direction: column;
  width: 50%;
  padding: 5%;
  border-radius: 5px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #404040;
  }
  p {
    font-size: 14px;
    font-style: italic;
    color: #404040;
  }
  @media screen and (max-width: 600px) {
    padding: 10px;
    width: 50vw;
  }
`;
export const PowersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 600px) {
    
  }
`;
