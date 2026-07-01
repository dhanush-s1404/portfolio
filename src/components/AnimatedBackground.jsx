export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/6 dark:bg-primary/4 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-accent/6 dark:bg-accent/4 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] bg-purple/6 dark:bg-purple/4 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      <div className="absolute top-2/3 right-1/4 w-[300px] h-[300px] bg-primary/4 dark:bg-primary/3 rounded-full blur-[80px] animate-float-slow" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-primary/20 animate-float" />
      <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 rounded-full bg-accent/25 animate-float animation-delay-200" />
      <div className="absolute top-[45%] left-[5%] w-1 h-1 rounded-full bg-purple/20 animate-float animation-delay-400" />
      <div className="absolute top-[65%] right-[8%] w-2.5 h-2.5 rounded-full bg-primary/15 animate-float-slow animation-delay-600" />
      <div className="absolute top-[80%] left-[20%] w-1.5 h-1.5 rounded-full bg-accent/20 animate-float animation-delay-800" />
      <div className="absolute top-[35%] left-[70%] w-1 h-1 rounded-full bg-purple/25 animate-float animation-delay-300" />

      {/* Diagonal moving lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonals" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonals)" />
      </svg>
    </div>
  )
}
