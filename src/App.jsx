import personImg from "./assets/person.png";
import sofaImg from "./assets/sofa.png";
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
        <h1>
          Artist Redefining <span>Architecture</span> with AI-Driven Design
        </h1>
      </div>
      <div className="card image-container">
        <img src={personImg} alt="person" />
      </div>
      <div className="card projects">
        <p>Musea</p>
        <img src={sofaImg} alt="sofa" />
        <hr />
        <p>Elara</p>
        <hr />
        <p>Verve</p>
        <hr />
        <p>Zephyr</p>
      </div>
      <div className="card about">
        <p>
          Julia Huang is an innovative AI artist, renowned for blending
          cutting-edge technology with creative expression. Based in LA, she
          crafts unique digital art experiences accessible globally.
        </p>
      </div>
      <div className="card contact">
        <p>Have some questions?</p>
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
