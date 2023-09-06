import { Outlet } from "react-router-dom";
import { Container, Header, HeaderLink, NavBox, Navigation } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <HeaderLink to={"/"}>Rental cars Ukraine</HeaderLink>

          <NavBox>
            <HeaderLink to={"/catalog"}>Catalog</HeaderLink>

            <HeaderLink to={"/favorites"}>Favorites</HeaderLink>
          </NavBox>
        </Navigation>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
