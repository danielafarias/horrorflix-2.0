import { rest } from "msw";
import { movieById, movies } from "./getObjects";

export const handlers = [
  rest.get("*/discover/movie", (req, res, ctx) => {
    return res(
      ctx.json(movies),
      ctx.status(200)
    );
  }),

  rest.get("*/movie/:id", (req, res, ctx) => {
    return res(
      ctx.json(movieById),
      ctx.status(200)
    );
  }),
];
