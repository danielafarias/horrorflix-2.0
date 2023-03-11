import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Vote from "../../components/Vote";
import api from "../../services/api";
import { Container } from "./styles";

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
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Container
      backgroundImg={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
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
            <button className="save-btn">Salvar</button>
            <Link className="trailer-btn" to="#">
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
