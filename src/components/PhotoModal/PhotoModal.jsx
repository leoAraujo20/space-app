import styled from "styled-components";
import Photo from "../Gallery/Photo";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const Dialog = styled.dialog`
  position: absolute;
  background: transparent;
  padding: 0;
  border-style: none;
  justify-items: center;
  width: 1000px;
`;

function PhotoModal({ photoExpanded, onExpand, onFavorite }) {
  return (
    <>
      {photoExpanded && (
        <Overlay>
          <Dialog open={!!photoExpanded}>
            <Photo photo={photoExpanded} isExpanded={true} onExpand={onExpand} onFavorite={onFavorite} />
          </Dialog>
        </Overlay>
      )}
    </>
  );
}

export default PhotoModal;
