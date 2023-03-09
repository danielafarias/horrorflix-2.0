import { Container } from "./styles";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import SliderCard from "./SliderCard";

export default function Slider() {
    //TODO: tirar os ts-ignore
    const [width, setWidth] = useState(0);
    const dragSlider = useRef();
    const sliderArray = [1, 2, 3, 4, 5, 6];

    function handleScroll(direction: string) {
        const { current } = dragSlider;
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

        if (direction === "left") {
            //@ts-ignore
            current.scrollLeft -= scrollAmount
        } else {
            //@ts-ignore
            current.scrollLeft += scrollAmount
        }
    }

    useEffect(() => {
        //@ts-ignore
        setWidth(dragSlider.current?.scrollWidth - dragSlider.current?.offsetWidth)
    }, [])

    return (
        <Container>
            <div className="slider_box">
                <h2>TESTE</h2>
                <div className="slider_button">
                    <p>Clique aqui</p>
                    <div className="slider_arrow">
                        <div className="slider_arrow_icon" onClick={() => handleScroll('left')}>
                         <TiArrowLeftThick />
                        </div>
                        <div className="slider_arrow_icon" onClick={() => handleScroll('right')}>
                         <TiArrowRightThick />
                        </div>
                    </div>

                        {/* @ts-ignore */}
                    <motion.div className="slider_items" ref={dragSlider}>
                        {/* @ts-ignore */}
                        <motion.div className="slider_item" ref={dragSlider} drag="x" dragConstraints={{right: 0, left: -width}}>
                            {
                                sliderArray.map((el, i) => (
                                    //@ts-ignore
                                    <SliderCard key={i + 1} el={el} i={i}/>
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Container>
    )
}