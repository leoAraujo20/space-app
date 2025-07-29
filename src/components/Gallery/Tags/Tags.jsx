import { styled } from "styled-components";
import tags from "./tags.json";

const TagsWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  margin-top: 56px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
;

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

function Tags() {
  return (
    <TagsWrapper>
      <TagTitle>Busque por tags:</TagTitle>
      <TagsContainer>
        {tags.map((tag) => (
          <TagButton key={tag.id}>{tag.title}</TagButton>
        ))}
      </TagsContainer>
    </TagsWrapper>
  );
}

export default Tags;
