type BackgroundProps = { children: React.ReactNode; className?: string };

export function Background({ children, className = "" }: BackgroundProps) {
  return <div className={`site-background ${className}`.trim()}>{children}</div>;
}
