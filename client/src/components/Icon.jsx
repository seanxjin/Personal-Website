import { motion } from "motion/react";


export default function Icon({ image, alt, style, ...props }) {

    return (
        <>
            <motion.img
                whileHover={{
                    scale: 1.1,
                }} style={{ width: "25%", borderRadius: "10%", ...style }} src={image} alt={alt} {...props} />
        </>
    );
}