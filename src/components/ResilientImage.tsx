import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  containerClassName?: string;
}

export default function ResilientImage({
  src,
  alt,
  title,
  className = 'h-full w-full object-cover',
  containerClassName = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#171717] via-[#101010] to-[#090909] p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#D99A3E]/30 bg-[#D99A3E]/10 text-[#F5D28A]">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="font-display text-base font-semibold text-[#F5F1E8]">
          {title || alt}
        </p>
        <p className="mt-1 text-xs text-[#B9BEC7]">AIMADEIT AI Creative Lab</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
