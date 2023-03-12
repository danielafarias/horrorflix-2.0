import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import Loader from "../../components/Loader";
import Vote from "../../components/Vote";

import { Container } from "./styles";

import api from "../../services/api";

interface MovieType {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<MovieType>({} as MovieType);

  useEffect(() => {
    handleMovie();
  }, []);

  async function handleMovie() {
    try {
      const response = await api.get(`movie/${id}`, {
        params: {
          api_key: "3c00eaa45868cd68c6653fa2a92cdbf6",
          language: "pt-BR",
        },
      });

      setMovie(response.data);
      setLoading(false);
    } catch {
      setLoading(false);
      navigate("/", { replace: true });
    }
  }

  function handleSave(movie: MovieType) {
    const newMovie = {
      title: movie.title,
      imagePath: movie.poster_path,
      id: movie.id,
    };

    const localList = localStorage.getItem("@horrorflix");

    let favoriteList =
      localList !== null && localList !== undefined
        ? JSON.parse(localList)
        : [];

    const hasMovie = favoriteList.some(
      (item: MovieType) => item.id === newMovie.id
    );

    if (hasMovie) {
      toast.warning(`${newMovie.title} já está em sua lista`);
      return;
    }

    favoriteList.push(newMovie);
    localStorage.setItem("@horrorflix", JSON.stringify(favoriteList));

    toast.success(`${newMovie.title} foi adicionado à sua lista`);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Container
      backgroundImg={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      data-testid="movie-container"
    >
      <div className="overlay">
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <article className="movie-sinopse">
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
          </article>
          <div className="movie-vote">
            <h3>Avaliação:</h3>
            <Vote average={movie.vote_average} />
          </div>
          <div className="movie-buttons">
            <button
              className="save-btn"
              data-testid="save-btn"
              onClick={() => handleSave(movie)}
            >
              Salvar
            </button>
            <Link
              className="trailer-btn"
              data-testid="trailer-btn"
              to={`https://www.youtube.com/results?search_query=${movie.title}`}
              target="_blank"
              rel="external"
            >
              Trailer
            </Link>
          </div>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </Container>
  );
}
