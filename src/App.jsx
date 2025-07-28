import styled from "styled-components";
import GlobalStyles from "./components/Global";
import Header from "./components/Header";
import SideBar from "./components/SideBar/SideBar";
import Banner from "./components/Banner";
import bannerImg from "../src/assets/banner.png";
import Gallery from "./components/Gallery";

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

const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {
  return (
    <BackgroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContent>
          <SideBar />
          <GalleryContainer>
            <Banner
              text="A galeria mais completa de fotos do espaço!"
              bannerImg={bannerImg}
            />
            <Gallery />
          </GalleryContainer>
        </MainContent>
      </AppContainer>
    </BackgroundGradient>
  );
}

export default App;
