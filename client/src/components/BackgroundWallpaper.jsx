import "./BackgroundWallpaper.css";
import leftForest from "../assets/left-layer1.svg";
import rightForest from "../assets/right-layer1.svg";
import mountainleft from "../assets/mountain1.svg";
import mountainRight from "../assets/mountain2.svg";
import bird1 from "../assets/bird1.svg";
import bird2 from "../assets/bird2.svg";
import bird3 from "../assets/bird3.svg";
import bird5 from "../assets/bird5.svg";
import bird7 from "../assets/bird7.svg";
import bird8 from "../assets/bird8.svg";

export default function BackgroundWallpaper() {

    return (
        <>
            <img src={leftForest} alt="forest" style={{
                position: "absolute",
                left: "0",
                bottom: "0",
                zIndex: "9"
            }}></img>
            <img src={rightForest} alt="forest" style={{
                position: "absolute",
                right: "0",
                bottom: "0",
                zIndex: "9"
            }}></img>
            <img src={mountainleft} alt="mountain" style={{
                position: "absolute",
                bottom: "0",
                zIndex: "7",
            }}>
            </img>
            <img src={mountainRight} alt="mountain" style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: "6",
            }}>
            </img>
            <img src={bird1} alt="bird" style={{
                position: "absolute",
                bottom: "28rem",
                right: "7rem",
                zIndex: "7",
            }}>
            </img>
            <img src={bird2} alt="bird" style={{
                position: "absolute",
                bottom: "20rem",
                right: "13rem",
                zIndex: "7",
            }}>
            </img>
            <img src={bird3} alt="bird" style={{
                position: "absolute",
                bottom: "17rem",
                right: "25rem",
                zIndex: "7",
            }}>
            </img>
            <img src={bird5} alt="bird" style={{
                position: "absolute",
                bottom: "21rem",
                right: "20rem",
                zIndex: "7",
            }}>
            </img>
            <img src={bird7} alt="bird" style={{
                position: "absolute",
                bottom: "25rem",
                right: "10rem",
                zIndex: "7",
            }}>
            </img>
            <img src={bird8} alt="bird" style={{
                position: "absolute",
                bottom: "25rem",
                right: "16rem",
                zIndex: "7",
            }}>
            </img>
            
        </>
    );
}