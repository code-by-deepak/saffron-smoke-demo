import { useMemo } from "react";

export function Embers({ count = 28 }: { count?: number }) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 1 + Math.random() * 3,
        duration: 12 + Math.random() * 18,
        delay: -Math.random() * 20,
        drift: (Math.random() - 0.5) * 80,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((e) => (
        <span
          key={e.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            background: "radial-gradient(circle, oklch(0.88 0.16 75) 0%, oklch(0.72 0.2 50 / 0.6) 50%, transparent 70%)",
            boxShadow: "0 0 8px oklch(0.82 0.18 70 / 0.8)",
            animation: `ember-rise ${e.duration}s linear ${e.delay}s infinite`,
            // @ts-expect-error css var
            "--drift": `${e.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
