import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { CatalogPage } from "./components/pages/CatalogPage";
import { FavoritesPage } from "./components/pages/FavoritesPage";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/Theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
