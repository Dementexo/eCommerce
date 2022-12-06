import { useState, useEffect } from "react";

/* Image carousel for site introduction */
export const ImageSlider = () => {
    const [currentIMG, setCIMG] = useState(0);

    useEffect(() => {
        if (currentIMG < 0) {
            setCIMG(0);
        }
        else if(currentIMG > 2) {
            setCIMG(2);
        }
    })

    if(currentIMG == 0){
        return (
            <div className="siteIntroduction sii1">
                <div className="buttonHolder">
                    <button className="scrollButton" onClick={() => setCIMG(currentIMG - 1)}><img src={require("./Images/icons8-double-left-30.png")}></img></button>
                    <button className="scrollButton" onClick={() => setCIMG(currentIMG + 1)}><img src={require("./Images/icons8-double-right-30.png")}></img></button>
                </div>
                <div className="textHolder">
                    <span className="siText1 si">The world of Real Estate can be quite chaotic, filled with many uncertainties and obstacles.</span>
                    <span className="siText2">Despite this, there is one truth: networking and communication are your best friends.</span>
                </div>
            </div>
        )
    }
    else if(currentIMG == 1){
        return (
            <div className="siteIntroduction sii2">
                <div className="buttonHolder">
                    <button className="scrollButton" onClick={() => setCIMG(currentIMG - 1)}><img src={require("./Images/icons8-double-left-30.png")}></img></button>
                    <button className="scrollButton" onClick={() => setCIMG(currentIMG + 1)}><img src={require("./Images/icons8-double-right-30.png")}></img></button>
                </div>
                <div className="textHolder">
                    <span className="siText1 si">Our goal at EC is to provide a seamless, central hub for agents and coaches to connect.</span>
                    <span className="siText2">Gone are the days where you desperately run around the office, trying to keep everyone up to speed.</span>
                </div>
            </div>
        )
    }
    else if (currentIMG == 2){
        return (
            <div className="siteIntroduction sii3">
                <div className="buttonHolder">
                    <button className="scrollButton" onClick={() => setCIMG(currentIMG - 1)}><img src={require("./Images/icons8-double-left-30.png")}></img></button>
                    <button className="scrollButton" onClick={() => setCIMG(currentIMG + 1)}><img src={require("./Images/icons8-double-right-30.png")}></img></button>
                </div>
                <div className="textHolder">
                    <span className="siText1 si">Communication is a crucial component in Real Estate, and the most successful are often great at it.</span>
                    <span className="siText2">Up your game up, keep yourself up to speed and take your operations to a whole new level!</span>
                </div>
            </div>
        )
    }
}

/* Extended handler for search button onClick event, creates searchbox popup */
export const SearchPop = ({props}) => {
    const [exitTrigger, setET] = useState("");
    let status = props;

    const clickHandle = () => {
        setET("inactive");
    }

    useEffect(() => {
        console.log("reran!");
        if(exitTrigger == "inactive" && status == "active"){
            console.log("working...")
            setET("");
        }
    },[props])

    if (status == "active" && exitTrigger != "inactive"){
        return(
            <div className="spHolder">
                <button className="spButton" onClick={clickHandle}>
                    Exit
                </button>
                <div className="spContent">
                    <div className="spHeader">
                        Get in touch with agents, coaches, or friends!
                    </div>
                    <div className="searchPopup">

                    </div>
                </div>
            </div>
        )
    }
    else if (exitTrigger == "inactive"){
        return(
            <div className="spHolder2">
                <button className="spButton" onClick={clickHandle}>
                    Exit
                </button>
                <div className="spContent">
                    <div className="spHeader">
                        Get in touch with agents, coaches, or friends!
                    </div>
                    <div className="searchPopup">

                    </div>
                </div>
            </div>
        )
    }
}
