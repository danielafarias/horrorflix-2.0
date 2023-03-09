import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import List from "./pages/List";
import Movie from "./pages/Movie";

export function RoutesApp() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Movie />} />
        <Route path="/lista" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}
