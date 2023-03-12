import { useEffect, useState } from "react";

import Loader from "../../components/Loader";
import Slider from "../../components/Slider";

import { Container, EmptyContainer } from "./styles";

import loader from "../../assets/img/loader.gif";

interface MovieType {
  title: string;
  imagePath: string;
  id: number;
}

export default function List() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localList = localStorage.getItem("@horrorflix");

    let favoriteList =
      localList !== null && localList !== undefined
        ? JSON.parse(localList)
        : [];

    setMovies(favoriteList);
    setLoading(false);
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  if (loading === false && movies.length === 0) {
    return (
      <EmptyContainer>
        <span>Lista vazia</span>
        <img src={loader} alt="Empty" />
      </EmptyContainer>
    );
  }

  return (
    <Container>
      <h2>Minha lista</h2>
      <Slider
        sliderArray={movies.slice(0, 6)}
        hasSaved={true}
        setLoading={setLoading}
      />
      {movies.length > 6 && movies.length >= 12 && (
        <Slider sliderArray={movies.slice(6, 12)} hasSaved={true} />
      )}
      {movies.length > 12 && movies.length >= 18 && (
        <Slider sliderArray={movies.slice(12, 18)} hasSaved={true} />
      )}
    </Container>
  );
}
