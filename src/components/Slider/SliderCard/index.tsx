import { motion } from "framer-motion";

function SliderCard() {
    return (
        <motion.div className="slider-card">
            <div className="slider-card-box">
                <motion.div className="slider-card-image">
                    {/*TODO width: 500
                    height: 300
                    objectFit: cover */}
                    <img src={""} className="slider-card-img" alt="image"/>
                </motion.div>
                <div className="slider-card-title">
                    <p>FOTO TESTE</p>
                    <div className="slider_like">X</div>
                </div>

                <div className="slider-card-price">
                    <div className="slider-card-price-box">
                        <small>current</small>
                        <p>1.000</p>
                    </div>
                    <div className="slider-card-price-time">
                        <small>current</small>
                        <p>1.000</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SliderCard;