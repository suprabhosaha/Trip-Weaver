import left_arrow from "../img/left_arrow.svg";
import right_arrow from "../img/right_arrow.svg";
import tokyo from "../img/tokyo.svg";
import rome from "../img/rome.svg";
import capetown from "../img/capetown.svg";

// CSS code for the following is in index.css

const TopLocation = () => {
    return (
        <div className="container">
            <div className="head">
                <div className="head-text">
                    <div className="topic">
                        Top Locations to Explore
                    </div>
                    <div className="topic_description">
                        Here are some of the most visited places in 2023
                    </div>
                </div>
                <div className="head-control-arrows">
                    <img src={left_arrow} alt="Previous Button" />
                    <img src={right_arrow} alt="Next Button" />
                </div>
            </div>
            <div className="picture-gallery">
                <div className="picture-cards">
                    <img src={tokyo} alt="Tokyo" />
                    <p className="picture-text-small">Tokyo, Japan</p>
                    <p className="picture-text-big">The Shibuya</p>
                </div>
                <div className="picture-cards">
                    <img src={rome} alt="Tokyo" />
                    <p className="picture-text-small">Rome, Italy</p>
                    <p className="picture-text-big">The Colosseum</p>
                </div>
                <div className="picture-cards">
                    <img src={capetown} alt="Tokyo" />
                    <p className="picture-text-small">Capetown, South Africa</p>
                    <p className="picture-text-big">The Blyde River Canyon</p>
                </div>
            </div>
        </div>
    );
}

export default TopLocation;