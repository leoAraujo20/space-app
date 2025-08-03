import { styled } from "styled-components";
import tags from "./tags.json";
import Tag from "../../Tag";

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


function Tags({ onSelectTag }) {
  return (
    <TagsWrapper>
      <TagTitle>Busque por tags:</TagTitle>
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => onSelectTag(tag)}>{tag.title}</Tag>
        ))}
      </TagsContainer>
    </TagsWrapper>
  );
}

export default Tags;
