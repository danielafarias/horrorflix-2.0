import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
