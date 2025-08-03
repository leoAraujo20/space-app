import styled from "styled-components";
import GlobalStyles from "./components/Global";
import Header from "./components/Header";
import SideBar from "./components/SideBar/SideBar";
import Banner from "./components/Banner";
import bannerImg from "../src/assets/banner.png";
import Gallery from "./components/Gallery";
import { useState } from "react";
import photos from "./photos.json";
import PhotoModal from "./components/PhotoModal";

const BackgroundGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContent = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [photoList, setPhotoList] = useState(photos);
  const [photoExpanded, setPhotoExpanded] = useState(null);

  const HandleTagSelection = (tag) => {
    tag.id === 0
      ? setPhotoList(photos)
      : setPhotoList(photos.filter((photo) => photo.tagId === tag.id));
  };

  const HandleFavorite = (photoId) => {
    const updatedPhotos = photoList.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotoList(updatedPhotos);

    if (photoExpanded && photoExpanded.id === photoId) {
      const updatedPhoto = updatedPhotos.find((photo) => photo.id === photoId);
      setPhotoExpanded(updatedPhoto);
    }
  };

  const HandleExpand = (photo) => {
    if (photoExpanded) {
      setPhotoExpanded(null);
      return;
    }
    setPhotoExpanded(photo);
  };

  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContent>
          <SideBar />
          <GalleryContent>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              bannerImg={bannerImg}
            />
            <Gallery
              photos={photoList}
              onFavorite={HandleFavorite}
              onExpand={HandleExpand}
              onSelectTag={HandleTagSelection}
            />
          </GalleryContent>
        </MainContent>
      </AppContainer>
      <PhotoModal
        photoExpanded={photoExpanded}
        onExpand={HandleExpand}
        onFavorite={HandleFavorite}
      />
    </BackgroundGradient>
  );
}

export default App;
