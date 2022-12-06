import { useState } from "react";
import { ImageSlider, SearchPop } from "./homeMechanics";

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
    <body className="App">
      <SearchPop props = {searchTrig}/>
      <header className="siteTop">
        <h1 className="siteName">
          Emissary Connect
        </h1>
      </header>
      <nav>
      <div className="navOptions">
        <div className="opt">Home</div>
        <div className="opt">Announcements</div>
        <div className="opt">Daily Handouts</div>
        <div className="opt">Live Chat</div>
        <div className="opt">FAQ</div>
      </div>
      <div className="navOptions2">
        <div className="opt" onClick={clickHandler1}><img className="optImg" src={require("./Images/kindpng_790382.png")}></img></div>
        <div className="opt"><img className="optImg" src={require("./Images/kindpng_6236350.png")}></img></div>
        <div className="opt"><img className="optImg" src={require("./Images/kindpng_3120207.png")}></img></div>
      </div>
      </nav>
      <main className="mainBody">
        <ImageSlider/>
      </main>
      <div className="trendingLink">
          New to the site? Let's get started!
        <img className="tlImg" src={require("./Images/right-arrow-in-black-circular-button.png")}></img>
      </div>
      <footer>Version 0.1.0</footer>
    </body>
  );
}

export default App;
