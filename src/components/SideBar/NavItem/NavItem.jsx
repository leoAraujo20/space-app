import styled from "styled-components";

const NavItemStyled = styled.li`
  font-family: ${props => props.$isActive ? 'GandhiSansBold' : 'GandhiSansRegular'};
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${ props => props.$isActive ? '#7B78E5' : '#D9D9D9'};
  display: flex;
  align-items: center;
  gap: 22px;
`;

function NavItem({ activeIcon, inactiveIcon, isActive = false, children }) {
  return (
    <NavItemStyled $isActive={isActive}>
      <img src={isActive ? activeIcon : inactiveIcon} alt={children} />
      {children}
    </NavItemStyled>
  )
}

export default NavItem;