import styled from "styled-components";
import Title from "../../Title";
import popularPhotos from "./popular-photos.json";
import Photo from "../Photo";
import Button from "../../Button";

const PopularContainer = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PhotoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;


function SectionPopular({ onExpand }) {
  return (
    <PopularContainer>
      <Title $align="center">Populares</Title>
      <PhotoGrid>
        {popularPhotos.map((photo) => (
          <Photo key={photo.id} photo={photo} variant="popular" onExpand={onExpand} />
        ))}
      </PhotoGrid>
      <Button />
    </PopularContainer>
  );
}

export default SectionPopular;
