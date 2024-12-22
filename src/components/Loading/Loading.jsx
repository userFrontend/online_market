
import "./Loading.scss";

const Loading = () => {
  const bubbles = Array.from({ length: 150 }, () => ({
    randomSize: Math.random(),
    randomSpeed: Math.random(),
    randomPosition: Math.random(),
    randomDelay: Math.random(),
  }));

  return (
    <div className="loader-container">
      <div className="loader-text">Beauty Brand</div>
      <div className="loader-bubbles">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              '--random-size': bubble.randomSize,
              '--random-speed': bubble.randomSpeed,
              '--random-position': bubble.randomPosition,
              '--random-delay': bubble.randomDelay,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
