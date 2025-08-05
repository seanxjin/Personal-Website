import "./Star_texture.css";
import { useEffect, useRef } from "react";

export default function Star_texture() {


    const ref = useRef();

    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        window.addEventListener("resize", () => {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        });


        const stars = [];

        for (let i = 0; i < 400; i++) {
            let star = {
                x: 0,
                y: 0,
                progress: Math.random(),
                centerX: canvas.width / 2,
                centerY: canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                pathRadius: 250 + Math.random() * (canvas.width - 250),
                speed: Math.random() * 0.0002 + 0.0001
            };
            stars.push(star);
        }


        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = `transparent`;
            context.fillRect(0, 0, canvas.width, canvas.height);

            for (let star of stars) {
                star.progress += star.speed;

                if (star.progress >= 1) {
                    star.progress = 0;
                }

                const t = Math.PI * (1 - star.progress);

                star.x = star.centerX + star.pathRadius * Math.cos(t);
                star.y = star.centerY + star.pathRadius * -Math.sin(t);

                context.beginPath();
                context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                context.fillStyle = `white`;
                context.fill();
            }

            requestAnimationFrame(animate);
        }

        animate();


    }, []);


    return (
        <canvas ref={ref} id="starry-canvas-container">

        </canvas>
    );
}