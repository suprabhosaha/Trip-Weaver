import left_arrow from "../img/left_arrow.svg";
import right_arrow from "../img/right_arrow.svg";
import dubai from "../img/dubai.svg";
import canada from "../img/canada.svg";
import ecuador from "../img/ecuador.svg";

// CSS code for the following is in index.css

const SearchedLocation = () => {
    return (
        <div className="container">
            <div className="head">
                <div className="head-text">
                    <div className="topic">
                        Locations based on Search
                    </div>
                    <div className="topic_description">
                        Check out fun places based on your searches
                    </div>
                </div>
                <div className="head-control-arrows">
                    <img src={left_arrow} alt="Previous Button" />
                    <img src={right_arrow} alt="Next Button" />
                </div>
            </div>
            <div className="picture-gallery">
                <div className="picture-cards">
                    <img src={dubai} alt="Dubai" />
                    <p className="picture-text-small">Dubai, UAE</p>
                    <p className="picture-text-big">Burj Khalifa</p>
                </div>
                <div className="picture-cards">
                    <img src={canada} alt="Vancouver" />
                    <p className="picture-text-small">Vancouver, Canada</p>
                    <p className="picture-text-big">Published on Main</p>
                </div>
                <div className="picture-cards">
                    <img src={ecuador} alt="Baños de Agua Santa" />
                    <p className="picture-text-small">Baños de Agua Santa, Ecuador</p>
                    <p className="picture-text-big">The Hot Springs of Baños</p>
                </div>
            </div>
        </div>
    );
}

export default SearchedLocation;