// App.js
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faCommentDots,
  faNewspaper,
  faBrain,
  faGlobe,
  faImage,
  faDownload,
  faMobileAlt,
  faHome,
  faVolumeUp,
  faVolumeDown,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import logo from "./icon_pi.png";

function App() {
  const [loaded, setLoaded] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const makeNote = async () => {
    try {
      await axios.post("http://192.168.29.17:5000/make_note");
      alert("Note recorded and saved successfully!");
    } catch (error) {}
  };

  const sendSMS = async () => {
    try {
      await axios.post("http://192.168.29.17:5000/send_sms");
      alert("SMS sent successfully!");
    } catch (error) {}
  };

  const showNews = async () => {
    try {
      await axios.post("http://192.168.29.17:5000/show_news");
      alert("News fetched successfully!");
    } catch (error) {}
  };

  const askAssistant = async () => {
    try {
      await axios.post("http://192.168.29.17:5000/give_alpha");
      alert("Assistant response received!");
    } catch (error) {}
  };

  const translateText = async () => {
    try {
      await axios.post("http://192.168.29.17:5000/give_translation");
      alert("Translation successful!");
    } catch (error) {}
  };

  const viewCameraImage = async () => {
    try {
      await axios.post("http://192.168.29.17:5000/fetch_camera");
      alert("Camera image fetched successfully!");
    } catch (error) {}
  };

  const adjustVolume = async (direction) => {
    try {
      await axios.post(`http://192.168.29.17:5000/adjust_volume/${direction}`);
      alert("Volume control done");
    } catch (error) {}
  };

  const handleHomeAuto = async () => {
    try {
      await axios.post("http://192.168.29.17:5000/home_auto");
    } catch (error) {
      alert("Error", `An error occurred: ${error.message}`);
    }
  };
  const handleSpotifyPlay = async () => {
    try {
      await axios.get("http://192.168.29.17:5000/spotify_play");
    } catch (error) {
      alert("Error", `An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <div className="welcome-text" ref={textRef}>
        <h2>Welcome to PiMate</h2>
        <img width="300" src={logo} alt="PiMate Logo" />
      </div>
      <main className="grid-container">
        {/* Button grid items */}
        <div className="grid-item button" onClick={makeNote}>
          <FontAwesomeIcon icon={faStickyNote} size="3x" />
          <span>Take Note</span>
        </div>
        <div className="grid-item button" onClick={sendSMS}>
          <FontAwesomeIcon icon={faCommentDots} size="3x" />
          <span>Send SMS</span>
        </div>
        <div className="grid-item button" onClick={showNews}>
          <FontAwesomeIcon icon={faNewspaper} size="3x" />
          <span>Read News</span>
        </div>
        <div className="grid-item button" onClick={askAssistant}>
          <FontAwesomeIcon icon={faBrain} size="3x" />
          <span>Ask Assistant</span>
        </div>
        <div className="grid-item button" onClick={translateText}>
          <FontAwesomeIcon icon={faGlobe} size="3x" />
          <span>Translate</span>
        </div>
        <div className="grid-item button" onClick={viewCameraImage}>
          <FontAwesomeIcon icon={faImage} size="3x" />
          <span>View Camera</span>
        </div>
        <div className="grid-item button" onClick={handleSpotifyPlay}>
          <FontAwesomeIcon icon={faMusic} size="3x" />
          <span>Spotify</span>
        </div>
        <div className="grid-item button" onClick={handleHomeAuto}>
          <FontAwesomeIcon icon={faHome} size="3x" />
          <span>Home Automation</span>
        </div>
      </main>
      {/* Section for Dropbox, GitHub, and Home Automation */}
      <div>
        <h3 className="Heading-text">Downloads</h3>
      </div>
      <section className="additional-section">
        <div
          className="grid-item button"
          onClick={() => (window.location.href = "https://www.dropbox.com")}
        >
          <FontAwesomeIcon icon={faDownload} size="3x" />
          <span>Dropbox</span>
          <h4 className="download-text">
            You can access all the files by just clicking the above Dropbox icon
          </h4>
        </div>
        <div
          className="grid-item button"
          onClick={() =>
            (window.location.href = "https://github.com/Alexwolf21/PiApp")
          }
        >
          <FontAwesomeIcon icon={faMobileAlt} size="3x" />
          <span>PiMate App</span>
          <h4 className="download-text">
            Navigate to our mobile application and control Pimate with your
            mobile devices
          </h4>
        </div>
        <div
          className="grid-item button"
          onClick={() =>
            (window.location.href = "https://github.com/Alexwolf21/PiApp")
          }
        >
          <FontAwesomeIcon icon={faHome} size="3x" />
          <span>GitHub</span>
          <h4 className="download-text">
            Feel free to access the github repo and play around with the
            codebase 😁
          </h4>
        </div>
      </section>
      {/* Volume control buttons */}
      <div className="volume-control">
        <div
          className="grid-item button rounded"
          onClick={() => adjustVolume("up")}
        >
          <FontAwesomeIcon icon={faVolumeUp} size="3x" />
          <span>Volume Up</span>
        </div>
        <div
          className="grid-item button rounded"
          onClick={() => adjustVolume("down")}
        >
          <FontAwesomeIcon icon={faVolumeDown} size="3x" />
          <span>Volume Down</span>
        </div>
      </div>
      <div>
        <h3 className="footer-text">
          Made with the power of Raspberry pi🍓and designed by React ⚛️
        </h3>
      </div>
    </div>
  );
}

export default App;
