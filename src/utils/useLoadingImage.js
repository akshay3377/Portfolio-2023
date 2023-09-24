import React, { useState, useEffect } from "react";

const UseLoadingImage = ({ lowQualitySrc, highQualitySrc, imageRadius }) => {
  const [src, setSrc] = useState(lowQualitySrc);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      setSrc(highQualitySrc);
      setIsLoaded(true);
    };

    return () => (img.onload = null);
  }, [lowQualitySrc, highQualitySrc]);

  return (
    <img
      src={src}
      alt="Low Quality"
      style={{
        filter: isLoaded ? "none" : "blur(20px)",
        borderRadius: imageRadius,
        transition: isLoaded ? "filter 0.3s ease-out" : "none",
      }}
    />
  );
};

export default UseLoadingImage;
