import styled from "styled-components";

const Figure = styled.figure`
  width: ${(props) =>
    props.$isExpanded
      ? "90%"
      : props.$variant === "popular"
      ? "212px"
      : "460px"};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;

  & > img {
    max-width: 100%;
    border-radius: ${(props) =>
      props.$variant === "popular" ? "20px" : "20px 20px 0 0"};
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

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`;

function Photo({
  photo,
  onFavorite,
  onExpand,
  isExpanded = false,
  variant = "default",
}) {
  return (
    <Figure $isExpanded={isExpanded} $variant={variant}>
      <img src={photo.path} alt={photo.title} onClick={() => onExpand(photo)}/>
      {variant === "default" && (
        <figcaption>
          <CaptionHeader>
            <TitleSource>
              <h3>{photo.title}</h3>
              <h4>{photo.source}</h4>
            </TitleSource>
            <CaptionIcons>
              <button onClick={() => onFavorite(photo.id)}>
                {photo.isFavorite ? (
                  <img src="/icons/favorito-ativo.png" alt="Desfavoritar" />
                ) : (
                  <img src="/icons/favorito.png" alt="Favoritar" />
                )}
              </button>
              <button onClick={() => onExpand(photo)}>
                <img src="/icons/expandir.png" alt="Expandir" />
              </button>
            </CaptionIcons>
          </CaptionHeader>
        </figcaption>
      )}
    </Figure>
  );
}

export default Photo;
