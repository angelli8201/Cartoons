import "../styles/AboutUs.css";

export default function AboutUs() {
  const aboutPicUrl = "https://i.redd.it/d6scjdnnjula1.jpg";
  const aboutGifUrl =
    "https://i.kym-cdn.com/photos/images/original/001/420/517/9e2.gif";

  return (
    <>
      <div className="about-container mt-4 row">
        <h1 className="">About We Love Cartoons!</h1>
        <h5 className="">Cartoon Lovers Unite!</h5>
        <div className="about-pic-container col-12">
          <img
            src={aboutPicUrl}
            alt="different characters from Disney Channel
                     Nickelodeon, and Cartoon Network"
          />
        </div>
        <p className="col-lg-6 col-md-12 mt-4 about-text-container">
          This is your top spot for All things Cartoons!
          <br />
          From taking down mean adults with the Kids Next Door,
          <br />
          to solving mysteries with meddling kids,
          <br />
          or hanging out with your friends in Bikini Bottom!
          <br />
          All Cartoon Lovers are welcomed here. Sign up and Sign in
          <br />
          for the best Cartoon Info and Discussions on the web!
          <br />
          Make and view Posts for your favorite Cartoons and
          <br />
          enjoy the company of others who are crazy for cartoons!
        </p>
        <div className="about-gif-container col-lg-6 col-md-12">
          <img
            src={aboutGifUrl}
            alt="awesome ass gif from OK KO
                     that brings on the Cartoon Network nostalgia"
          />
        </div>
      </div>
    </>
  );
}
