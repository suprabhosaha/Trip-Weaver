import './Recents.css';
import location_icon from "../img/location_icon.svg";

const Recents = () => {
    const data = [
        {
            "id": 1,
            "architecture": "Burj Khalifa",
            "location": "Dubai, UAE"
        },
        {
            "id": 2,
            "architecture": "Big Ben",
            "location": "London, UK"
        },
        {
            "id": 3,
            "architecture": "Museum of Tomorrow",
            "location": "Rio de Janerio, Brazil"
        },
        {
            "id": 4,
            "architecture": "Taj Mahal",
            "location": "Agra, India"
        },
        {
            "id": 5,
            "architecture": "Ngorongoro Conservation Area",
            "location": "Northen Tanzania"
        }
    ]
    return (
        <div className="recents">
            <div className="topic">
                Your Recent Searches
            </div>
            <div className="topic_description">
                Here are some of the places you have searched
            </div>
            {/* The searhces which have been made by users recently appear here */}
            <div className="recent-item">
                {data.map((item) => (
                    <div className="item-box" key={item.id}>
                        <img src={location_icon} alt="Location icon" />
                        <div className="item-text">
                            <p className="archictecture">{item.architecture}</p>
                            <p className='location'>{item.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recents;