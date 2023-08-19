import { styled } from "styled-components";

const Tablero = () => {
  const onCambio = (e) => {
    if (e.target.value.length == 1) {
      e.target.value = e.target.value.toUpperCase();
    } else {
      e.target.value = "";
    }
  };

  return (
    <Grid>
      <Campo
        type="text"
        onChange={onCambio}
        className="intento1 campo"
        name="1"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento1 campo"
        name="1"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento1 campo"
        name="1"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento1 campo"
        name="1"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento1 campo"
        name="1"
        required
      />
      {/* Intento 2 */}
      <Campo
        type="text"
        onChange={onCambio}
        className="intento2 campo"
        name="2"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento2 campo"
        name="2"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento2 campo"
        name="2"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento2 campo"
        name="2"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento2 campo"
        name="2"
        required
      />
      {/* Intento 3 */}
      <Campo
        type="text"
        onChange={onCambio}
        className="intento3 campo"
        name="3"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento3 campo"
        name="3"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento3 campo"
        name="3"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento3 campo"
        name="3"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento3 campo"
        name="3"
        required
      />
      {/* Intento 4 */}
      <Campo
        type="text"
        onChange={onCambio}
        className="intento4 campo"
        name="4"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento4 campo"
        name="4"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento4 campo"
        name="4"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento4 campo"
        name="4"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento4 campo"
        name="4"
        required
      />

      {/* Intento 5 */}
      <Campo
        type="text"
        onChange={onCambio}
        className="intento5 campo"
        name="5"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento5 campo"
        name="5"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento5 campo"
        name="5"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento5 campo"
        name="5"
        required
      />
      <Campo
        type="text"
        onChange={onCambio}
        className="intento5 campo"
        name="5"
        required
      />
    </Grid>
  );
};

const Grid = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-template-rows: repeat(5, 70px);
  gap: 10px;
  justify-content: center;
  align-content: center;
`;

const Campo = styled.input`
  border: 2px solid black;
  outline: none;
  font-weight: bold;
  text-align: center;
  font-size: 5vmin;
  resize: none;
  border-radius: 5px;
`;

export default Tablero;
