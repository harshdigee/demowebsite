import type { CSSProperties } from "react";

const galleryImgBase: CSSProperties = {
  borderRadius: 12,
  objectFit: "cover",
  maxWidth: "100%",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
};

type BlogImageGalleryProps = {
  images: string[];
  title: string;
};

/**
 * Layout rules by image count for the `images` column (not inline HTML imgs).
 */
export function BlogImageGallery({ images, title }: BlogImageGalleryProps) {
  const list = images.filter(Boolean);
  const imageCount = list.length;
  if (imageCount === 0) return null;

  const wrapperClass = "w-full max-w-full mx-0 p-0 my-[30px]";

  const Img = ({
    src,
    index,
    className,
    style,
  }: {
    src: string;
    index: number;
    className?: string;
    style?: CSSProperties;
  }) => (
    <img
      src={src}
      alt={`${title} – gallery image ${index + 1}`}
      loading="lazy"
      className={className}
      style={{ ...galleryImgBase, ...style }}
    />
  );

  if (imageCount === 1) {
    return (
      <div className={wrapperClass}>
        <div className="w-full">
          <Img src={list[0]} index={0} className="block h-auto w-full max-w-full object-cover" />
        </div>
      </div>
    );
  }

  if (imageCount === 2) {
    return (
      <div className={`${wrapperClass} grid w-full grid-cols-2 gap-[20px]`}>
        {list.slice(0, 2).map((src, i) => (
          <div key={`${src}-${i}`} className="min-w-0">
            <Img src={src} index={i} className="block h-auto w-full object-cover" />
          </div>
        ))}
      </div>
    );
  }

  if (imageCount === 3) {
    return (
      <div className={wrapperClass}>
        <div className="mb-[20px] h-[400px] w-full overflow-hidden rounded-[12px]">
          <Img src={list[0]} index={0} className="h-full w-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <div className="h-[200px] min-w-0 overflow-hidden rounded-[12px]">
            <Img src={list[1]} index={1} className="h-full w-full object-cover" />
          </div>
          <div className="h-[200px] min-w-0 overflow-hidden rounded-[12px]">
            <Img src={list[2]} index={2} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${wrapperClass} grid grid-cols-1 gap-[15px] md:grid-cols-2 lg:grid-cols-3`}>
      {list.map((src, i) => (
        <div key={`${src}-${i}`} className="aspect-square min-w-0 overflow-hidden rounded-[12px]">
          <Img src={src} index={i} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}
