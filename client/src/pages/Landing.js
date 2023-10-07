import "../styles/Landing.css";
import BMo from "../images/b-mo.png"

export default function Landing() {
  const cartoonImages = [
    "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn&legacyStatusCode=true",
    "https://akns-images.eonline.com/eol_images/Entire_Site/2018616/rs_600x600-180716155148-600x600.new-rugrats-lp.71618.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    "https://cdn2.hubspot.net/hubfs/437097/DTC/09.blog/AdventureTime_characters.jpg",
    "https://i.guim.co.uk/img/media/66e444bff77d9c566e53c8da88591e4297df0896/120_0_1800_1080/master/1800.png?width=1200&height=1200&quality=85&auto=format&fit=crop&s=69b22b4292160faf91cb45ad024fc649",
  ];
  return (
    <div className="outer-container mt-4">
      <div className="container-style">
        <div>
          <h1>
            CARTOONS<img src={BMo} className="landing-logo" alt="B-Mo from Adventure Time"></img>
          </h1>
          <div className="inner-container-style">
            <p>
              Welcome to our vibrant world of cartoons, where imagination knows
              no bounds! Our webpage is a celebration of the magical realm of
              animated wonders that captivate audiences of all ages. From
              timeless classics that have shaped generations to the latest
              cutting-edge creations, we are your go-to destination for all
              things animated. Dive into a kaleidoscope of colors, humor, and
              heartwarming stories that transport you to fantastical landscapes
              and introduce you to an array of unforgettable characters. Whether
              you're a seasoned animation enthusiast or just discovering the joy
              of cartoons, our curated collection promises something for
              everyone. Join us on this animated journey, where laughter,
              adventure, and creativity converge in a symphony of visual
              delights. Explore, reminisce, and experience the enchantment of
              cartoons like never before!
            </p>
          </div>
          <div className="bottom-container-style">
            <iframe
              width="100%"
              height="750"
              src="https://www.youtube.com/embed/JLg1mn_hNp0?autoplay=1&loop=1&mute=1"
              title="30 Years of Iconic Cartoons | Cartoon Network"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2>
            Popular Cartoons
          </h2>
          <div className="bottom-container-style">
            {cartoonImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Cartoon Image ${index + 1}`}
                style={{ maxWidth: "50%", marginBottom: "10px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
