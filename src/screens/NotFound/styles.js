import styled from "styled-components";
import img from "../../img/404.png";
export const NotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #f0c27b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4b1248,
    #f0c27b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4b1248,
    #f0c27b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    h1{
      color: #e5e5e5;
      text-align: center;
    }
  `;

export const Element404 = styled.div`
  background: url(${img}) no-repeat center center;
  width: 450px;
  height: 400px;
//   border: 1px solid red;
  animation: go-back 1s infinite alternate;

@keyframes go-back {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
`;
