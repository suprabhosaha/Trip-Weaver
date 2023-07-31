import "./Navbar.css";

const Navabar = () => {
    return (
        <div className="navbar">
            {/* Name of the company at left top of navbar */}
            <div className="company">
                TripWeaver
            </div>
            {/* Nav buttons for navigation at middle of the navbar */}
            <div className="nav-buttons">
                <ul>
                    <li>Home</li>
                    <li>Map</li>
                    <li>About Us</li>
                    <li>Reviews</li>
                </ul>
            </div>
            {/* Authorisation buttons (Login/Signup) at right corner */}
            <div className="auth-buttons">
                <button className="sign-up">Sign Up</button>
                <button className="login" style={{ padding: "8px 25px" }}>Login</button>
            </div>
        </div>
    );
}

export default Navabar;