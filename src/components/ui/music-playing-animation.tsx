import { useEffect, useState, useRef } from 'react';

export const MusicPlayingAnimation = () => {
  const [heights, setHeights] = useState([12, 20, 8, 24, 16]);
  const frameRef = useRef<number | undefined>(undefined);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    const updateHeights = (timestamp: DOMHighResTimeStamp) => {
      // Update every ~120ms for smoother animation
      if (timestamp - lastUpdateRef.current >= 120) {
        setHeights(prev => prev.map(() => Math.random() * 20 + 6));
        lastUpdateRef.current = timestamp;
      }
      frameRef.current = requestAnimationFrame(updateHeights);
    };

    frameRef.current = requestAnimationFrame(updateHeights);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-1 h-14">
      {heights.map((height, index) => (
        <div
          key={index}
          className="w-1 bg-green-500 rounded-full"
          style={{
            height: `${height}px`,
            transition: 'height 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      ))}
    </div>
  );
}