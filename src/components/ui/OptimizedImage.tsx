'use client';

import { useEffect, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';
import { BLURURL } from '@/config/env.config';

interface OptimizedImageProps extends Omit<ImageProps, 'height' | 'width'> {
  aspectRatio?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  containerClassName?: string;
  fillContainer?: boolean;
  maxRetries?: number;
}

export default function OptimizedImage({
  src,
  alt,
  aspectRatio,
  width,
  height,
  containerClassName,
  className,
  sizes = '(min-width: 1280px) 50vw, (min-width: 768px) 75vw, 100vw',
  quality = 75,
  priority = false,
  placeholder = 'blur',
  blurDataURL = BLURURL,
  fillContainer = false,
  maxRetries = 5,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);
  const [retryCount, setRetryCount] = useState(0);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setRetryCount(0);
    setLoading(true);
    setLoadFailed(false);
  }, [src]);

  const handleImageError = () => {
    if (retryCount < maxRetries) {
      setTimeout(() => {
        setRetryCount(retryCount + 1);
        setImgSrc(`${src}?retry=${retryCount + 1}`);
      }, 1000 * (retryCount + 1)); // Exponential backoff
    } else {
      console.error(`Failed to load image after ${maxRetries} retries`);
      setLoading(false);
      setLoadFailed(true);
    }
  };

  // const containerStyle: React.CSSProperties = {
  //   aspectRatio: aspectRatio,
  //   width: typeof width === 'number' ? `${width}px` : width,
  //   height: typeof height === 'number' ? `${height}px` : height,
  // };

  // if (!width && !height && !aspectRatio) {
  //   containerStyle.width = '100%';
  //   containerStyle.height = 'auto';
  // }

  return (
    <div className='overflow-hidden'>
      <Image
        className={cn(
          'duration-700 ease-in-out',
          isLoading || loadFailed
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          fillContainer ? 'object-cover' : 'object-contain',
          className
        )}
        src={imgSrc}
        alt={alt}
        fill={fillContainer}
        width={!fillContainer ? width : undefined}
        height={!fillContainer ? height : undefined}
        sizes={sizes}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={() => {
          setLoading(false);
          setLoadFailed(false);
        }}
        onError={handleImageError}
        {...props}
      />
    </div>
  );
}
