import "./Star_texture.css";

export default function Star_texture() {

    let colors = ["#DEF6FF", "#A28AA6", "#9791BF", "#7C6EA3", "#193567", "#304B80", "#E5D7FF", "#CBECFF", "#BFE7FF", "#D0F3FF"];

    let stars = [];

    function createStars() {
        for (let i=0; i<400; i++) {
            const chosenColor = colors[Math.floor(Math.random() * colors.length)];
            let star = {
                position: "absolute",
                top: ((Math.random() * 97) + 2).toString() + "%",
                left: ((Math.random() * 97) + 2).toString() + "%",
                width: ((Math.random() * 0.1) + 0.05).toString() + "rem",
                height: ((Math.random() * 0.1) + 0.05).toString() + "rem",
                background: chosenColor,
                borderRadius: "50%",
                filter: "brightness(3)"
            };
            stars.push(star);
        }
    }

    createStars();

    return (
        <div id="starry-canvas-container">
            {stars.map((star, index) => {
                return ( 
                <div style={star} key={index}/>
                );
            })}
        </div>
    );
}