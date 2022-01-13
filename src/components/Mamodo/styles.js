import styled from "styled-components";

export const View = styled.div`
  width: 80vw;
  height: 100%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: ${(props) => props.color};
  border-radius: 5px;
  border: 2px solid rgba(180, 180, 180, 0.5);
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 20px;
`;

export const Categories = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Atacks = styled.a`
  border-bottom: 2px solid ${(props) => props.color};
`;

export const Defenses = styled.a`
  border-bottom: 2px solid ${(props) => props.color};
`;

export const Transform = styled.a`
  border-bottom: 2px solid ${(props) => props.color};
`;

export const Powers = styled.text`
  width: 100%;
  text-align: center;
  font-size: 36px;
  color: gray;
  background-color: ${(props) => props.color};
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 100%;
    width: 75%;
    object-fit: cover;
  }
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(150, 150, 150, 0.3);
  flex-direction: column;
  height: 100%;
  width: 50%;
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
`;
export const powersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
