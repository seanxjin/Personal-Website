import { motion } from "motion/react";


export default function Icon({ image, alt, style, ...props }) {

    return (
        <>
            <motion.img
                whileHover={{
                    scale: 1.1,
                }} style={{maxWidth: "10%", borderRadius: "15px", objectFit: "contain",...style }} src={image} alt={alt} {...props} />
        </>
    );
}