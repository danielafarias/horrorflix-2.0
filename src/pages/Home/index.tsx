import { useEffect, useState } from "react";
import { BsPlusCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";

import Slider from "../../components/Slider";
import Loader from "../../components/Loader";

import { Container } from "./styles";

import api from "../../services/api";

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
  const [rawMovies, setRawMovies] = useState<MovieType[]>([]);
  const [renderMovies, setRenderMovies] = useState<SliderArrayType[][]>([]);

  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleMovies();
  }, [page]);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleMovies() {
    try {
      const response = await api.get("discover/movie", {
        params: {
          api_key: "3c00eaa45868cd68c6653fa2a92cdbf6",
          language: "pt-BR",
          with_genres: 27,
          page: page,
        },
      });

      setRawMovies([...rawMovies, ...response.data.results]);
      setNumPages(
        Math.ceil((rawMovies.length + response.data.results.length) / 6)
      );
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  useEffect(() => {
    const formatted = [];

    for (let i = 0; i < numPages; i++) {
      formatted.push(
        rawMovies.slice(i * 6, i * 6 + 6).map((res: MovieType) => ({
          id: res.id,
          title: res.title,
          imagePath: res.poster_path,
        }))
      );
    }
    setRenderMovies(formatted);
  }, [rawMovies, numPages]);

  if (loading) {
    return <Loader text="Carregando" alt="Loading" />;
  }

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <Container>
      {renderMovies.map((movies, index) => (
        <Slider key={index} sliderArray={movies} />
      ))}

      <button className="paginate-button" onClick={() => setPage(page + 1)}>
        <BsPlusCircleFill size={50} />
      </button>
      <button
        className="top-button"
        style={{ display: isVisible ? "block" : "none" }}
        onClick={scrollToTop}
      >
        <BsFillArrowUpCircleFill size={50} />
      </button>
    </Container>
  );
}
