import "../styles/AboutUs.css";


export default function AboutUs() {

    const aboutPicUrl = 'https://i.redd.it/d6scjdnnjula1.jpg';

    return (
        <div>
            <h1>About Us</h1>
            <div className="about-container">
                <h3>About We Love Cartoons!</h3>
                <h5>Cartoon Lovers Unite!</h5>
                <div className='about-pic-container'>
                     <img src={aboutPicUrl} alt="different characters from Disney Channel
                     Nickelodeon, and Cartoon Network" />
                </div>
                <p>
                    This is your top spot for All things Cartoons!
                    <br/>
                    From taking down mean adults with the Kids Next Door,
                    <br/>
                    to solving mysteries with meddling kids, 
                    <br/>
                    or hanging out with your friends in Bikini Bottom!
                    <br/>
                    All Cartoon Lovers are welcomed here. Sign up and Sign in
                    <br/>
                    for the best Cartoon Info and Discussions on the web!
                    <br/>
                    Make and view Posts for your favorite Cartoons and 
                    <br/>
                    enjoy the company of others who are crazy for cartoons!
                </p>
            </div>
        </div>
        
    )
}