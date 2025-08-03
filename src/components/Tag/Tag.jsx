import styled from "styled-components";

const TagButton = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  
  &:hover {
    border-color: #c98cf1;
  }
`;

function Tag({ children, onClick }) {
    return <TagButton onClick={onClick}>{children}</TagButton>;
}

export default Tag;