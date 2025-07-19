import {styled} from 'styled-components';
import SearchBar from '../SearchBar';

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 212px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="Space App Logo" />
      <SearchBar />
    </StyledHeader>
  );
}

export default Header;