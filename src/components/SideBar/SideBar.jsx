import NavItem from "./NavItem";

function SideBar() {
  return (
    <aside>
      <nav>
        <ul>
          <NavItem activeIcon="/icons/home-ativo.png" inactiveIcon="/icons/home-inativo.png" isActive={true}>
            Home
          </NavItem>
          <NavItem activeIcon="/icons/mais-vistas-ativo.png" inactiveIcon="/icons/mais-vistas-inativo.png">
            Mais Vistas
          </NavItem>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar;