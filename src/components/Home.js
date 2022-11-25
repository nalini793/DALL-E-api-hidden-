import { useState, useRef } from "react";
import "./Home.css";
import { Configuration, OpenAIApi } from "openai";
import env from "react-dotenv";
import ParticleBackground from "./ParticlesBackground";

function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [display, setDisplay] = useState(false);
  const [enable, setEnable] = useState(true);
  const promptRef = useRef("");
  const configuration = new Configuration({
    apiKey: env.REACT_APP_MY_KEY,
  });
  const handlePrompt = () => {
    setPrompt(promptRef.current.value);
    setEnable(false);
  };
  const openai = new OpenAIApi(configuration);
  const clickHandler = () => {
    setImage("");
    setDisplay(true);
    generateImage();
  };

  const generateImage = async () => {
    const result = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "256x256",
    });
    setImage(result.data.data[0].url);
    setDisplay(false);
  };

  return (
    <div className="App">
      <div className="app-main">
        <div className="wrapper_animation">
          <ParticleBackground></ParticleBackground>
        </div>

        <h3>Generate random images using Open AI API</h3>
        <p className="description">
          DALL·E 2 is a new AI system that can create realistic images and art
          from a description in natural language.
        </p>
        <textarea
          className="app-input"
          placeholder="Search for a fancy fox riding the London Underground.. or an owl dressed as a librarian"
          ref={promptRef}
          rows="4"
          cols="40"
        />
        <div className="buttons">
          <button className="btn" onClick={handlePrompt}>
            Set Prompt
          </button>
          <button className="btn" onClick={clickHandler} disabled={enable}>
            Generate an Image
          </button>
        </div>
        {image.length > 0 ? (
          <img
            className="result-image"
            src={image}
            alt="result from dall-E API"
          />
        ) : (
          display && <p className="wait">Please wait...</p>
        )}
      </div>
    </div>
  );
}

export default Home;
