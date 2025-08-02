import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  color: white;
  padding: 12px 0;
  border: 2px solid #c98cf1;
  border-radius: 10px;
  cursor: pointer;
  width: 212px;

  &:hover {
    background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
  }
`;

function Button() {
  return <StyledButton>Ver Mais</StyledButton>; 
}

export default Button;
