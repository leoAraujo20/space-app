import styled from "styled-components";
import Title from "../../Title";
import popularPhotos from "./popular-photos.json";
import Photo from "../Photo";

const PhotoGrid = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;

const PopularContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

function SectionPopular() {
  return (
    <PopularContainer>
      <Title $align="center">Populares</Title>
      <PhotoGrid>
        {popularPhotos.map((photo) => (
          <Photo key={photo.id} photo={photo} variant="popular" />
        ))}
      </PhotoGrid>
    </PopularContainer>
  );
}

export default SectionPopular;
