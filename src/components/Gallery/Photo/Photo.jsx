import styled from "styled-components";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const CaptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleSource = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h3 {
    font-family: "GandhiSansBold";
    margin: 0;
    font-size: 16px;
  }
  h4 {
    margin: 0;
    font-size: 16px;
    flex-grow: 1;
  }
`;

const CaptionIcons = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`;

function Photo({ photo }) {
  return (
    <Figure>
      <img src={photo.path} alt={photo.title} />
      <figcaption>
        <CaptionHeader>
          <TitleSource>
            <h3>{photo.title}</h3>
            <h4>{photo.source}</h4>
          </TitleSource>
          <CaptionIcons>
            <img src="/icons/favorito.png" alt="Favoritar" />
            <img src="/icons/expandir.png" alt="Expandir" />
          </CaptionIcons>
        </CaptionHeader>
      </figcaption>
    </Figure>
  );
}

export default Photo;
