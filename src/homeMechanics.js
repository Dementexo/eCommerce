import { useState, useEffect } from "react";

/* Image carousel for site introduction */
export const ImageSlider = () => {
    const [currentIMG, setCIMG] = useState(0);

    const handleClick1 = (prop) => {
        if (prop == 0) {
            setCIMG(2);
        }
        else if(prop == 1) {
            setCIMG(0);
        }
        else if (prop == 2) {
            setCIMG(1);
        }
    }
    
    const handleClick2 = (prop) => {
        if (prop == 0) {
            setCIMG(1);
        }
        else if (prop == 1) {
            setCIMG(2);
        }
        else if (prop == 2) {
            setCIMG(0);
        }
    }

    return (
        <>
        <div className={`siteIntroduction ${currentIMG == 0 && "sii1"} ${currentIMG == 1 && "sii2"} ${currentIMG == 2 && "sii3"}`}>
            <button className="scrollButton" onClick={() => handleClick1(currentIMG)}><img src={require("./Images/icons8-double-left-30.png")}></img></button>
            <div className="textHolder">
                <span className="siText1 si">The world of Real Estate can be quite chaotic, filled with many uncertainties and obstacles.</span>
                <span className="siText2">Despite this, there is one truth: networking and communication are your best friends.</span>
            </div>
            <button className="scrollButton" onClick={() => handleClick2(currentIMG)}><img src={require("./Images/icons8-double-right-30.png")}></img></button>
        </div>
        <div className="charSection">
            <div className="charHolder">
                <div className="char">
                    <img className="charImg" src={require("./Images/handshake.png")}></img>
                    <span className="charText">Make connections with coaches and agents...</span>
                </div>
                <div className="char">
                    <img className="charImg" src={require("./Images/book.png")}></img>
                    <span className="charText">Hone your capabilities through easy-to-access resources...</span>
                </div>
                <div className="char">
                    <img className="charImg" src={require("./Images/goal.png")}></img>
                    <span className="charText">Grow your network, and achieve your goals!</span>
                </div>
            </div>
            <footer>EmissaryConnect © 2022  •  Designed by Don Brown</footer>
        </div>
        </>
    )
}

/* Extended handler for search button onClick event, creates searchbox popup */
export const SearchPop = ({props}) => {
    const [exitTrigger, setET] = useState("");
    let status = props;

    useEffect(() => {
        if(status == "inactive"){
            setET("inactive");
        }
        else if(status == "active"){
            setET("active");
        }
    },[props])

        return(
            <div className={`spHolder ${exitTrigger != "inactive" && 'visible'}`}>
                <input type='search' className="searchBar" placeholder="Find agents, coaches or simply friends..."></input>
                <button className="closeSearch" onClick={() => setET("inactive")}><img className="csIMG" src={require("./Images/reject.png")}></img></button>
            </div>
        )
}
