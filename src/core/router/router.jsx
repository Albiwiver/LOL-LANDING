import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main/MainLayout";
import { Home } from "../views/home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
