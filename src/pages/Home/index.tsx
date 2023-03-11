import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import Slider from "../../components/Slider";
import Loader from "../../components/Loader";

interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface SliderArrayType {
  title: string;
  imagePath: string;
  id: number;
}

export default function Home() {
  const [movies, setMovies] = useState<SliderArrayType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleMovies();
  }, []);

  async function handleMovies() {
    try {
      const response = await api.get("discover/movie", {
        params: {
          api_key: "3c00eaa45868cd68c6653fa2a92cdbf6",
          language: "pt-BR",
          with_genres: 27,
          page: 1,
        },
      });

      const formatted = response.data.results.map((res: MovieType) => ({
        id: res.id,
        title: res.title,
        imagePath: res.poster_path,
      }));

      setMovies(formatted);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Slider sliderArray={movies.slice(0, 6)} />
      {movies.length > 6 && movies.length >= 12 && (
        <Slider sliderArray={movies.slice(6, 12)} />
      )}
      {movies.length > 12 && movies.length >= 18 && (
        <Slider sliderArray={movies.slice(12, 18)} />
      )}
    </Container>
  );
}
