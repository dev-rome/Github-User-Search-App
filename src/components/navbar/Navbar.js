import styled from "styled-components";
import NavbarMoon from "./NavbarMoon";
import NavbarSun from "./NavbarSun";

const Nav = styled.nav`
  padding-top: 1.938rem;
  margin-bottom: 2.25rem;
`;

const NavWrapper = styled.div`
  max-width: 45.625rem;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.625rem;
    font-weight: 700;
    color: ${(props) => props.theme.logo};
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Navbar = ({ onClick, isLight }) => {
  return (
    <Nav>
      <NavWrapper>
        <p>devfinder</p>
        <Button onClick={onClick}>
          {isLight === "light" ? <NavbarMoon /> : <NavbarSun />}
        </Button>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
