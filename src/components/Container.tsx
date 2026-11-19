interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// The one page width used everywhere: 1320px max, fluid side padding.
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-[clamp(20px,4vw,48px)] ${className ?? ""}`}>
      {children}
    </div>
  );
}
