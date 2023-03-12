import { rest } from "msw";

export const handlers = [
  rest.get("*/movie/:id", (req, res, ctx) => {
    return res(
      ctx.json({
        adult: false,
        backdrop_path: "/zWDMQX0sPaW2u0N2pJaYA8bVVaJ.jpg",
        belongs_to_collection: null,
        budget: 20000000,
        genres: [
          {
            id: 27,
            name: "Terror",
          },
          {
            id: 9648,
            name: "Mistério",
          },
          {
            id: 53,
            name: "Thriller",
          },
        ],
        homepage: "https://www.universalpics.com.br/micro/knock-at-the-cabin",
        id: 631842,
        imdb_id: "tt15679400",
        original_language: "en",
        original_title: "Knock at the Cabin",
        overview:
          "Durante as férias em uma cabana remota, uma jovem e seus pais são feitos reféns por quatro estranhos armados que exigem que a família faça uma escolha impensável para evitar o apocalipse. Com acesso limitado ao mundo exterior, a família deve decidir no que acredita antes que tudo esteja perdido.",
        popularity: 2476.126,
        poster_path: "/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg",
        production_companies: [
          {
            id: 12236,
            logo_path: "/uV6QBPdn3MjQzAFdgEel6od7geg.png",
            name: "Blinding Edge Pictures",
            origin_country: "US",
          },
          {
            id: 33,
            logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
            name: "Universal Pictures",
            origin_country: "US",
          },
          {
            id: 7493,
            logo_path: "/452FO4LcI6lA6bfgl6w1kQYRBlr.png",
            name: "FilmNation Entertainment",
            origin_country: "US",
          },
          {
            id: 152785,
            logo_path: null,
            name: "Wishmore",
            origin_country: "US",
          },
          {
            id: 10338,
            logo_path: "/el2ap6lvjcEDdbyJoB3oKiYgXu9.png",
            name: "Perfect World Pictures",
            origin_country: "CN",
          },
        ],
        production_countries: [
          {
            iso_3166_1: "US",
            name: "United States of America",
          },
        ],
        release_date: "2023-02-01",
        revenue: 52000000,
        runtime: 100,
        spoken_languages: [
          {
            english_name: "English",
            iso_639_1: "en",
            name: "English",
          },
        ],
        status: "Released",
        tagline: "Salve sua família ou salve a humanidade. Faça a escolha.",
        title: "Batem à Porta",
        video: false,
        vote_average: 6.463,
        vote_count: 964,
      }),
      ctx.status(200)
    );
  }),
];
