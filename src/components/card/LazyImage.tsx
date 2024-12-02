import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  src: string;       // URL gambar
  alt: string;       // Deskripsi gambar
  effect?: any;   // Efek lazy-load
  className?: string; // Kelas tambahan
};

const LazyImage: React.FC<Props> = ({ src, alt, effect = "blur", className }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
            effect={effect}
      className={className}
      placeholderSrc="https://via.placeholder.com/150" // Placeholder opsional
    />
  );
};

export default LazyImage;
