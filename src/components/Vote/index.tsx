import {
  BsDropletFill,
  BsDropletHalf,
  BsDroplet,
  BsFillStarFill,
} from "react-icons/bs";

import { Container } from "./styles";

interface VoteProps {
  average: number;
}

function Vote({ average }: VoteProps) {
  const arrayAverage = average.toString().split(".");
  const a = Number(arrayAverage[0]);
  const b = arrayAverage[1] ? Number(arrayAverage[1][0]) : 0;
  const ceil = Math.ceil(Number(`${a}.${b}`));

  const tooltip = (
    <span className="tooltiptext">
      <div>
        <BsFillStarFill size={15} />
        {`${a}.${b}`.replace(".", ",")}
      </div>
    </span>
  );

  if (ceil > 0) {
    const fill = Array.from({ length: a }).map((_, i) => (
      <BsDropletFill size={30} data-testid="drop-fill" key={i} />
    ));
    const half = b > 0 && <BsDropletHalf size={30} data-testid="drop-half" />;
    const empty = Array.from({ length: 10 - ceil }).map((_, i) => (
      <BsDroplet size={30} data-testid="drop-empty" key={i} />
    ));

    return (
      <Container data-testid="vote-container">
        {fill}
        {half}
        {empty}
        {tooltip}
      </Container>
    );
  }

  const divs = Array.from({ length: 10 }).map((_, i) => (
    <BsDroplet size={30} data-testid="drop-empty" key={i} />
  ));

  return (
    <Container data-testid="vote-container">
      {divs}
      {tooltip}
    </Container>
  );
}

export default Vote;
