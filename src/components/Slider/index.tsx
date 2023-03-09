import { Container } from "./styles";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

interface SliderArrayType {
    title: string;
    imagePath: string;
    id: number;
}

interface SliderProps {
    sliderArray: SliderArrayType[];
}

export default function Slider({ sliderArray }: SliderProps) {
  //TODO: tirar os ts-ignore
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();
//   const sliderArray = [1, 2, 3, 4, 5, 6];

  function handleScroll(direction: string) {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left") {
      //@ts-ignore
      current.scrollLeft -= scrollAmount;
    } else {
      //@ts-ignore
      current.scrollLeft += scrollAmount;
    }
  }

  useEffect(() => {
    //@ts-ignore
    setWidth(dragSlider.current?.scrollWidth - dragSlider.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <div className="slider_box">
        <div className="slider_button">
          {/* <p>Clique aqui</p> */}
          <div className="slider_arrow_1">
            <div
              className="slider_arrow_icon"
              onClick={() => handleScroll("left")}
            >
              <TiArrowLeftThick />
            </div>
          </div>

          {/* @ts-ignore */}
          <motion.div className="slider_items" ref={dragSlider}>
              {/* @ts-ignore */}
            <motion.div className="slider_item" ref={dragSlider}
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {sliderArray.slice(0, 6).map((obj) => (
                //@ts-ignore
                <motion.div className="slider-card">
                  <div className="slider-card-box">
                    <motion.div className="slider-card-image">
                      {/*TODO width: 500
                                            height: 300
                                            objectFit: cover */}
                      <img src={`https://image.tmdb.org/t/p/original/${obj.imagePath}`} className="slider-card-img" alt={obj.title} />
                    </motion.div>
                    <div className="slider-card-title">
                      <p>{obj.title}</p>
                    </div>

                    <div className="slider-card-actions">
                      <button>Mais Informações</button>
                      <button>♥</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div className="slider_arrow_2">
            <div
              className="slider_arrow_icon"
              onClick={() => handleScroll("right")}
            >
              <TiArrowRightThick />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
