import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageFallbackProps } from '../types/ImageFallbackProps';


const ImageFallback:React.FC<ImageFallbackProps> = ({ imageUrl, alt}) => {
  const [imgSrc, setImgSrc] = useState<boolean>(false);
  const [oldSrc, setOldSrc] = useState<string>(imageUrl);
  const [fallbackSrc, setFallbackSrc] = useState<string>("")
  useEffect(() => {
    if(imageUrl === undefined){
      return
    }
    const regex = /animated\/(\d+)\//;
    const match = imageUrl.match(regex);
    const id = match ? match[1] : null
    const newSrc = `http://maplestory.io/api/gms/62/mob/${id}/icon?resize=3`
    setFallbackSrc(newSrc)
  },[imageUrl])

  if (oldSrc !== imageUrl) {
    setImgSrc(false);
    setOldSrc(imageUrl);
  }
  return (
    <Image
      fill
      alt={alt}
      src={imgSrc ? fallbackSrc : imageUrl}
      onError={() => {
        setImgSrc(true);
      }}
    />
  );
};

export default ImageFallback;