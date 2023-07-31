import './ReviewShowcase.css';
import all_review from "../img/all_review.svg";
import read_full_post from "../img/read_full_post.svg";

const ReviewShowcase = () => {
    const reviews = [
        {
            "id": 1,
            "img": 'mumbai.svg',
            "location": "Mumbai, India",
            "date_posted": "Feb 27, 2023",
            "read_time": "8 min",
            "title": "A Wonderful Journey to India",
            "review": "I had always been interested in spirituality, so I  decided to take a year-long journey to India to explore various religious practices and traditions. "
        },
        {
            "id": 2,
            "img": 'barcelona.svg',
            "location": "Barcelona, Spain",
            "date_posted": "Feb 22, 2023",
            "read_time": "5 min",
            "title": "A Solo Trip Across Europe",
            "review": "I had just graduated from college and decided to take a six-month solo trip across Europe before starting my career. I backpacked through 15 different countries, staying in hostels and meeting people."
        },
        {
            "id": 3,
            "img": 'kathmandu.svg',
            "location": "Kathmandu, Nepal",
            "date_posted": "Feb 20, 2023",
            "read_time": "6 min",
            "title": "11 Best Places to visit in Nepal",
            "review": "It was a beautiful spring morning when I arrived in Kathmandu, the capital city of Nepal. As soon as I stepped out of the airport, I was struck by the vibrant colors, the chaos of the streets."
        },
        {
            "id": 4,
            "img": 'prague.svg',
            "location": "Prague, Ukraine",
            "date_posted": "Feb 18, 2023",
            "read_time": "4 min",
            "title": "The Petrin Hill",
            "review": "I visited Prague, the beautiful capital city of the Czech Republic, and one of my favorite places in the city was the Petrin Hill. The Petrin Hill is a green oasis in the heart of Prague."
        }
    ]

    return (
        <div className="review-showcase">
            <div className="head">
                <div className="head-text">
                    <div className="topic">
                        Destination Reviews by our Users
                    </div>
                    <div className="topic_description">
                        Explore our latest reviews from our active users
                    </div>
                </div>
                <div className="head-control-buttons">
                    <img src={all_review} alt="All Reviews" />
                </div>
            </div>

            {/* Top Reviews by users get displayed here */}
            
            <div className="review-gallery">
                {reviews.map((review) => (
                    <div className="review-box" key={review.id}>
                        <img src={require(`../img/${review.img}`)} alt="" className='review-img' />
                        <div className="review-line1">
                            <div className="review-location">{review.location}</div>
                            <div className="review-post">{review.date_posted} • {review.read_time}</div>
                        </div>
                        <p className='review-title'>{review.title}</p>
                        <p className='review-review'>{review.review}</p>
                        <img src={read_full_post} alt="Read full post button" className='read_post' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewShowcase;