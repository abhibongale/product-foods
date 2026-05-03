interface CardProps {
  name: string;
  flag?: string;
  desc?: string;
  size?: "default" | "large";
  dimmed?: boolean;
  className?: string;
}

export default function Card({ name, flag, desc, size = "default", dimmed = false, className = "" }: CardProps) {
  const isLarge = size === "large";

  return (
    <div
      className={`bg-white rounded-2xl border-2 transition-all duration-300 flex-shrink-0 ${
        dimmed
          ? "border-[var(--color-lime)]/20 opacity-60 scale-90"
          : "border-[var(--color-lime)]/30 hover:border-johnnys-lime hover:shadow-xl"
      } ${
        isLarge ? "p-10 md:p-14 w-full" : "p-6"
      } ${className}`}
    >
      {flag && (
        <span className={`mb-4 block ${isLarge ? "text-5xl md:text-6xl" : "text-3xl"}`}>
          {flag}
        </span>
      )}
      <h3
        className={`font-bold text-[var(--color-black)] mb-2 ${
          isLarge ? "text-2xl md:text-3xl" : "text-lg"
        }`}
      >
        {name}
      </h3>
      {desc && (
        <p className={`text-[var(--color-gray)] ${isLarge ? "text-base md:text-lg" : "text-sm"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
