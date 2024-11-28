import React from "react";
import Slider from "./Slider";
import Image from "./images/IMG20230511085621.jpg"
const Home = () => {
  return (
    <div className="home">
      <div className="home">
  <div className="intro">
    <div>
      <img src={Image} alt="Mubeen Tariq" />
    </div>
    <div className="name">
      
      <p className="para">
      <h1>Mubeen Tariq</h1>
      <h2>Web Developer</h2>
        "Lines of code weave stories untold,
        In the quiet hum of the digital fold.
        From the web’s vast canvas, a vision is born,
        Crafting experiences that rise with the dawn.

        Through pixels and patterns, a world takes shape,
        A journey of creation, no room for escape.
        With each keystroke, a future we design,
        Bringing ideas to life, one line at a time."
      </p>
    </div>
  </div>
</div>
<div className="creation">
<h1>My Creations</h1>
</div>
      <Slider />
      <footer>© 2024 Mubeen Tariq</footer>
    </div>
  );
};

export default Home;
