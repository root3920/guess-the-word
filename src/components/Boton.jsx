import { styled } from "styled-components";

const Boton = ({ accion, titulo }) => {
  return <Button onClick={accion}>{titulo}</Button>;
};

const Button = styled.button`
  background-color: #ff5733;
  color: white;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  font-size: 3vmin;
  border: 0;
  outline: none;
  cursor: pointer;
`;
export default Boton;
