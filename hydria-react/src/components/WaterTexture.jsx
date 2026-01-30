const WaterTexture = () => {
  return (
    <svg
      viewBox="0 0 1440 320"
      className="absolute inset-0 w-full h-full opacity-20"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        fill="url(#waterGradient)"
        d="M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,138.7C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
    </svg>
  );
};

export default WaterTexture;
