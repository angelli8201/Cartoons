import '../styles/GlitterBackground.css';

const GlitterBackground = () => {

  const randomizePosition = () => {
    const x = Math.random() * 100 + 'vw'; 
    const y = Math.random() * 100 + 'vh'; 
    return { x, y };
  };


  const glitterFlakes = Array.from({ length: 50 }, (index) => {
    const { x, y } = randomizePosition();
    const animationDelay = Math.random() * 2;
    const style = {
      left: x,
      top: y,
      animationDelay: `${animationDelay}s`,
    };
    return <div key={index} className="glitter-flake" style={style}></div>;
  });

  return <div className="glitter-container">{glitterFlakes}</div>;
};

export default GlitterBackground;
