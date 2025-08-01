import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import SectionPopular from "./SectionPopular";
import Photo from "./Photo";

const GalleryContainer = styled.div`
  display: flex;
`;

const SectionRecent = styled.section`
  flex-grow: 1;
`;

const PhotoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

function Gallery({ photos, onFavorite, onExpand }) {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <SectionRecent>
          <Title>Navegue pela galeria!</Title>
          <PhotoGrid>
            {photos.map((photo) => (
              <Photo key={photo.id} photo={photo} onFavorite={onFavorite} onExpand={onExpand} />
            ))}
          </PhotoGrid>
        </SectionRecent>
        <SectionPopular onExpand={onExpand} />
      </GalleryContainer>
    </>
  );
}

export default Gallery;
