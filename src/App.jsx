import styled from "styled-components";
import GlobalStyles from "./components/Global";
import Header from "./components/Header";
import SideBar from "./components/SideBar/SideBar";
import Banner from "./components/Banner";
import bannerImg from "../src/assets/banner.png";

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

function App() {
  return (
    <BackgroundGradient>
      <GlobalStyles />
      <Header />
      <SideBar />
      <Banner
        text="A galeria mais completa de fotos do espaço!"
        bannerImg={bannerImg}
      />
    </BackgroundGradient>
  );
}

export default App;
