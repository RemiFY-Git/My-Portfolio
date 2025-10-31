import { useEffect, useState } from "react";

export const BackgroundAnimation = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStarAnimation();
    generateMeteorAnimation();
    // Optional: re-generate when window resizes
    window.addEventListener("resize", () => {
      generateStarAnimation();
      generateMeteorAnimation();
    });
    return () => window.removeEventListener("resize", generateStarAnimation);
  }, []);

  const generateStarAnimation = () => {
    const countStars = Math.floor((window.innerWidth * window.innerHeight) / 1000);
    const neonColors = ["#ffffff", "rgb(19,0,247)", "#ffffff", "rgb(254,6,110)", "#ffffff"];

    const newStars = [];
    for (let i = 0; i < countStars; i++) {
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.4 + 0.3,
        animationDuration: Math.random() * 5 + 2,
        color,
      });
    }
    setStars(newStars);
  };

  const generateMeteorAnimation = () => {
    const countMeteors = 5; // Adjust density here
    const newMeteors = [];

    for (let i = 0; i < countMeteors; i++) {
      newMeteors.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((item) => (
        <div
          key={item.id}
          className="absolute rounded-full animate-float"
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
            background: item.color,
            animationDuration: `${item.animationDuration}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {meteors.map((m) => (
        <div
          key={`meteor-${m.id}`}
          className="meteor"
          style={{
            width: "50px",
            height: "2px",
            top: `${m.top}%`,
            left: `${m.left}%`,
            animationDelay: `${m.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
