import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import astronaut from "../images/astronauts.svg";

function Home() {
  return (
    <React.Fragment>
      <section className="Big">
        <div className="Big-content">
          <div className="Big-container_text">
            <h2>
              Platzi <br /> <span>CONF</span>
            </h2>
            <h3>Print Your Badges</h3>
            <p>
              The easiest way to manage your <br /> conference
            </p>
            <Link to="/badges/new" className="btn btn-primary size">
              Start Now
            </Link>
          </div>
          <div className="Big-container_img">
            <img src={astronaut} alt="" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
