import personImg from "./assets/person.png";
import sofaImg from "./assets/sofa.png";

const App = () => {
  return (
    <div>
      <header>
        <h3>JULIA HUANG</h3>
        <ul>
          <li>PROJECTS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </header>
      <div>
        <h1>Artist Redefining Architecture with AI-Driven Design</h1>
      </div>
      <div>
        <img src={personImg} alt="person" />
      </div>
      <div>
        <p>Musea</p>
        <img src={sofaImg} alt="sofa" />
        <p>Elara</p>
        <p>Verve</p>
        <p>Zephyr</p>
      </div>
      <div>
        <p>
          Julia Huang is an innovative AI artist, renowned for blending
          cutting-edge technology with creative expression. Based in LA, she
          crafts unique digital art experiences accessible globally.
        </p>
      </div>
      <div>
        <p>Have some questions?</p>
        <h2>Contact me</h2>
      </div>
      <footer>
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
