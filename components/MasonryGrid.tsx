import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import ImageViewer from './ImageViewer';

interface MasonryGridProps {
  images: string[];
  albumName?: string;
}

export default function MasonryGrid({ images, albumName }: MasonryGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 4,
    1280: 3,
    1024: 2,
    768: 1,
  };

  // 使用useMemo来确保图片位置和高度只在组件挂载时随机生成一次
  const shuffledImages = useMemo(() => {
    // 创建带有随机高度的图片对象数组
    const imagesWithHeight = images.map((src, index) => ({
      src,
      originalIndex: index,
      height: [200, 250, 300, 350, 400][Math.floor(Math.random() * 5)]
    }));
    
    // 随机排序数组
    return imagesWithHeight.sort(() => Math.random() - 0.5);
  }, [images]);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_col"
      >
        {shuffledImages.map((image, index) => (
          <div
            key={image.originalIndex}
            className="relative overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImageIndex(image.originalIndex)}
            style={{ height: `${image.height}px` }}
          >
            <Image
              src={image.src}
              alt={`图片 ${image.originalIndex + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </Masonry>

      {selectedImageIndex !== null && (
        <ImageViewer
          images={images}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </>
  );
}
