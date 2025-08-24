import "./About.css"
import profilePic from "../assets/profile.jpg";

export default function About() {
    return (
        <div id="about-container">
            <div id="about">
                <img src={profilePic} alt="Profile Pic" style={{
                    objectFit: "cover",
                    width: "25rem",
                    height: "25rem",
                    borderRadius: "20px"
                }}/>
                <div id="about-content-container">
                    <h1>
                        Sean Jin
                    </h1>
                    <p>
                        Hello! I'm a 2nd year CS + Stats Major at the University of British Columbia.
                    </p>
                    <p style={{
                        display: "flex",
                        gap: "0.5rem"
                    }}>
                        Hobbies:<div>Badminton</div><div>Guitar</div>
                    </p>
                    <p>
                        Technical Interests:
                    </p>
                    <ul>
                        <li>Full-Stack Development</li>
                        <li>Data Science</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}