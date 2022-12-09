import { useState } from "react";
import { ImageSlider, SearchPop } from "./homeMechanics";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "./routes/about";
import { AnnouncePage } from "./routes/announce";
import { HandoutsPage } from "./routes/dh";
import { LcPage } from "./routes/livechat";


/* Site established on November 30th, 2022 */
/* Current Version: 0.1.0 */

function App() {
  const [searchTrig, stUpdate] = useState("inactive");

  const clickHandler1 = () => {
    if (searchTrig == "active"){
      stUpdate("inactive");
    }
    else if(searchTrig == "inactive"){
      stUpdate("active");
    }
  }

  return (
    <>
    <body className="App">
      <header className="siteTop">
        <h1 className="siteName">
          Emissary Connect
        </h1>
      </header>
      <nav>
      <div className="navOptions">
        <div className="opt"><Link to="/" className="link">Home</Link></div>
        <div className="opt"><Link to="/announcements" className="link">Announcements</Link></div>
        <div className="opt"><Link to="/dh" className="link">Daily Handouts</Link></div>
        <div className="opt"><Link to="/lc" className="link">Live Chat</Link></div>
        <div className="opt"><Link to="/about" className="link">About</Link></div>
      </div>
      <SearchPop props = {searchTrig}/>
      <div className="navOptions2">
        <div className="opt" onClick={clickHandler1}><img className="optImg" src={require("./Images/kindpng_790382.png")}></img></div>
        <div className="opt"><img className="optImg" src={require("./Images/kindpng_6236350.png")}></img></div>
        <div className="opt"><img className="optImg" src={require("./Images/kindpng_3120207.png")}></img></div>
      </div>
      </nav>
    </body>
    <Routes>
      <Route path="/" element={<main className="mainBody"><ImageSlider/></main>}/>
      <Route path="/announcements" element={<AnnouncePage/>}/>
      <Route path="/dh" element={<HandoutsPage/>}/>
      <Route path="/lc" element={<LcPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
    </Routes>
    </>
  );
}

export default App;
