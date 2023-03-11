import { Container } from "./styles";
import { BsDropletFill, BsDropletHalf, BsDroplet } from "react-icons/bs";

interface VoteProps {
  average: number;
}

function Vote({ average }: VoteProps) {
  const arrayAverage = average.toString().split(".");
  const a = Number(arrayAverage[0]);
  const b = Number(arrayAverage[1][0]);
  const ceil = Math.ceil(Number(`${a}.${b}`));

  if (ceil > 0) {
    const fill = Array.from({ length: a }).map((_, i) => (
      <BsDropletFill size={30} />
    ));
    const half = b > 0 && <BsDropletHalf size={30} />;
    const empty = Array.from({ length: 10 - ceil }).map((_, i) => (
      <BsDroplet size={30} />
    ));

    return (
      <Container>
        {fill}
        {half}
        {empty}
        <span className="tooltiptext">{`${a}.${b}`.replace(".", ",")}</span>
      </Container>
    );
  }

  const divs = Array.from({ length: 10 }).map((_, i) => (
    <BsDroplet size={30} />
  ));

  return (
    <Container>
      {divs}
      <span className="tooltiptext">{`${a}.${b}`.replace(".", ",")}</span>
    </Container>
  );
}

export default Vote;
