import { useEffect, useState } from "react";
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

export default function Home() {
    const [movies, setMovies] = useState<MovieType[]>([]);

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
                }
            });
    
            setMovies(response.data.results);
        } catch {};
    }

    return (
        <>
        </>
    );
}