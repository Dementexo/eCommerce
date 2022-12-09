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

    return (
        <div className={`siteIntroduction ${currentIMG == 0 && "sii1"} ${currentIMG == 1 && "sii2"} ${currentIMG == 2 && "sii3"}`}>
            <button className="scrollButton" onClick={() => setCIMG(currentIMG - 1)}><img src={require("./Images/icons8-double-left-30.png")}></img></button>
            <div className="textHolder">
                <span className="siText1 si">The world of Real Estate can be quite chaotic, filled with many uncertainties and obstacles.</span>
                <span className="siText2">Despite this, there is one truth: networking and communication are your best friends.</span>
            </div>
            <button className="scrollButton" onClick={() => setCIMG(currentIMG + 1)}><img src={require("./Images/icons8-double-right-30.png")}></img></button>
        </div>
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
