import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Howl, Howler } from "howler";
import BoyAnimation from "../../../../public/animation/boy.json";

const AnimationWithSound = ({ className }) => {
  const animationContainerRef = useRef(null);
  let sound;

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationContainerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: BoyAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    animation.addEventListener("DOMLoaded", () => {
      sound = new Howl({
        src: ["/audio/bio.mp3"],
        autoplay: true,
        loop: false,
        volume: 2.0,
      });
    });

    return () => {
      animation.destroy();
      sound?.stop();
    };
  }, []);

  return <div className={className} ref={animationContainerRef}></div>;
};

export default AnimationWithSound;
