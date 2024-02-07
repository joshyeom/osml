import React, { useState } from 'react';
import Image from 'next/image';
import { ImageFallbackProps } from '../types/ImageFallbackProps';


const ImageFallback:React.FC<ImageFallbackProps> = ({ imageUrl, alt, fallbackSrc, ...others }) => {
  const [imgSrc, setImgSrc] = useState(false);
  const [oldSrc, setOldSrc] = useState(imageUrl);
  if (oldSrc !== imageUrl) {
    setImgSrc(false);
    setOldSrc(imageUrl);
  }
  return (
    <Image
      {...others}
      alt={alt}
      src={imgSrc ? fallbackSrc : imageUrl}
      onError={() => {
        setImgSrc(true);
      }}
    />
  );
};

export default ImageFallback;