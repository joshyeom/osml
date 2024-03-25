import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ImageFallbackProps } from '../types/ImageFallbackProps';


const ImageFallback:React.FC<ImageFallbackProps> = ({ imageUrl, id, name}) => {
  const [imgSrc, setImgSrc] = useState<boolean>(false);
  const [oldSrc, setOldSrc] = useState<string>(imageUrl);
  const [fallbackSrc, setFallbackSrc] = useState<string>("")
  useEffect(() => {
    if(imageUrl === undefined){
      return
    }
    const newSrc = `https://maplestory.io/api/gms/62/mob/${id}/render/fly`
    setFallbackSrc(newSrc)
  },[imageUrl, id])

  if (oldSrc !== imageUrl) {
    setImgSrc(false);
    setOldSrc(imageUrl);
  }
  return (
    <Image
      fill
      alt={name}
      src={imgSrc ? fallbackSrc : imageUrl}
      onError={() => {
        setImgSrc(true);
      }}
    />
  );
};

export default ImageFallback;