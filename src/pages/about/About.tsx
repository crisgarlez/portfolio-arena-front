import "./About.css";
import miImagen from "../../assets/arena-front.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <nav className="nav">
        <span className="logo">crisgarlez/portfolio-arena-front</span>
        <span>
          <a
            href="https://github.com/crisgarlez/portfolio-arena-front/"
            target="_blank"
          >
            View documentation
          </a>
        </span>
      </nav>

      <div className="inner-container">
        <div className="splash__container" style={{ width: "90%" }}>
          <img
            className="splash"
            src={miImagen}
            alt="Descripción de la imagen"
          />
        </div>

        <main className="main" style={{ width: "90%" }}>
          <h1>Congratulations.</h1>
          <h2>Your Arena Front instance is ready to work</h2>
          <div className="tile__container">
            <Link to="/arena">
              <button className="btn tile">
                <span className="tile__label">Arena</span>
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export { About };
