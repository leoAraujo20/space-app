import {styled} from 'styled-components';

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 212px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src="/images/logo.png" alt="Space App Logo" />
    </StyledHeader>
  );
}

export default Header;