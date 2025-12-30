import personImg from "./assets/person.png";
import sofaImg from "./assets/sofa.png";
import arrowImg from "./assets/arrow.svg";
import circleImg from "./assets/circle.svg";
import flowerImg from "./assets/flower.svg";
import "./App.css";

const App = () => {
  return (
    <div className="bento">
      <header className="card header">
        <p>
          <span>JULIA</span> HUANG
        </p>
        <ul>
          <li>PROJECTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </header>
      <div className="card content">
        <img src={flowerImg} alt="flower" />
        <h1>
          Artist Redefining <span>Architecture</span> with AI-Driven Design
        </h1>
      </div>
      <div className="card image-container">
        <img src={personImg} alt="person" />
      </div>
      <div className="card projects">
        <div className="arrow-div1">
          <p>Musea</p>
          <img src={arrowImg} alt="arrow" />
        </div>
        <img className="sofa" src={sofaImg} alt="sofa" />
        <hr />
        <p>Elara</p>
        <hr />
        <p>Verve</p>
        <hr />
        <p>Zephyr</p>
      </div>
      <div className="card about">
        <img src={circleImg} alt="circle" />
        <p>
          Julia Huang is an innovative AI artist, renowned for blending
          cutting-edge technology with creative expression. Based in LA, she
          crafts unique digital art experiences accessible globally.
        </p>
      </div>
      <div className="card contact">
        <div className="arrow-div2">
          <p>Have some questions?</p>
          <img src={arrowImg} alt="arrow" />
        </div>
        <h2>Contact me</h2>
      </div>
      <footer className="card footer">
        <ul>
          <li>INSTAGRAM</li>
          <li>TWITTER</li>
          <li>LINKEDIN</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
