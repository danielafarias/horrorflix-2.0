import { useState, useRef, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

import { motion } from "framer-motion";

import { Container } from "./styles";
import { Link } from "react-router-dom";
interface SliderArrayType {
  title: string;
  imagePath: string;
  id: number;
}

interface SliderProps {
  sliderArray: SliderArrayType[];
}

export default function Slider({ sliderArray }: SliderProps) {
  const [width, setWidth] = useState(0);
  const dragSlider = useRef<HTMLDivElement>(null);

  function handleScroll(direction: string) {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (current !== null) {
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  }

  useEffect(() => {
    if (dragSlider !== null) {
      const { current } = dragSlider;

      if (current !== null) {
        setWidth(current.scrollWidth - current.offsetWidth);
      }
    }
  }, [dragSlider, sliderArray]);

  return (
    <Container>
      <div className="slider_button">
        <div className="slider_arrow_1">
          <button
            className="slider_arrow_icon"
            data-testid="left-btn"
            onClick={() => handleScroll("left")}
          >
            <MdArrowBackIosNew size={30} />
          </button>
        </div>

        <motion.div className="slider_items" ref={dragSlider} data-testid="motion-container">
          <motion.div
            className="slider_item"
            ref={dragSlider}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderArray.map((obj) => (
              <motion.div className="slider-card" data-testid={`motion-card-${obj.id}`} key={obj.id}>
                <div className="slider-card-box">
                  <motion.div className="slider-card-image">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${obj.imagePath}`}
                      className="slider-card-img"
                      alt={obj.title}
                    />
                  </motion.div>
                  <div className="slider-card-title">
                    <p>{obj.title}</p>
                  </div>

                  <div className="slider-card-actions">
                    <Link to={`/filme/${obj.id}`} className="info-btn">
                      <AiOutlineInfoCircle size={20} />
                      Informações
                    </Link>
                    <button className="like-btn" data-testid={`like-btn-${obj.id}`}>
                      <FaHeart size={25} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <div className="slider_arrow_2">
          <button
            className="slider_arrow_icon"
            data-testid="right-btn"
            onClick={() => handleScroll("right")}
          >
            <MdArrowForwardIos size={30} />
          </button>
        </div>
      </div>
    </Container>
  );
}
