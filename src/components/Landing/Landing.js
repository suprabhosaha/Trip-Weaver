import "./Landing.css";
import Search_icon from "../img/search_icon.svg";

const Landing = () => {
    return (
        <div className="landing">
            {/* Tagline of our company */}
            <div className="tagline">
                Discover New Places and Create Unforgettable Memories
            </div>
            {/* Search bar to look out for destinations */}
            <div className="form">
                <input type="text" placeholder="Search your next Destination" id="search-bar" />
                <img src={Search_icon} alt="Search" id="search-icon" />
            </div>
        </div>
    );
}

export default Landing;