import styled from "styled-components";

export const View = styled.div`
  width: 0%;
  height: 100vh;
  overflow-x: hidden;
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 20px;
`;

export const CardMamodo = styled.div`
  width: 300px;
  height: 600px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: ${(props) => props.color};
  border-radius: 4px;
  border: 2px solid ${(props) => props.border};
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageMamodo = styled.div`
  width: 250px;
  height: 250px;
  img {
    border: 2px solid ${(props) => props.border};
    border-radius: 50%;
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
`;

export const NameMamodo = styled.text`
  font-size: 24px;
  font-weight: bold;
  color: #404040;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.border};
`;

export const DescMamodo = styled.text`
  font-size: 14px;
  font-style: italic;
  color: ${(props) => props.color};
  background-color: #202020;
  border-radius: 5px;
  padding: 10px;
`;

export const PowersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const LinkMamodo = styled.a`
  width: 150px;
  height: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #606060;
  font-weight: bold;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: ${(props) => props.btncolor};
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`;
export const PowersMamodo = styled.div`
  text-align: center;
  h2 {
    font-style: italic;
    font-size: 18px;
    font-weight: bold;
    color: #404040;
  }
  ul {
    text-decoration: none;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: #404040;
  }
`;
