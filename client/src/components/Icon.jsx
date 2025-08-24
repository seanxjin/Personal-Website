import { motion } from "motion/react";

export default function Icon({ image, alt, style, ...props }) {
    return (
        <img style={{ width: "2.5rem", height: "2.5rem", ...style }} src={image} alt={alt} {...props} />
    );
}