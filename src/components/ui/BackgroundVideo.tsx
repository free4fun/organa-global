export default function BackgroundVideo() {
  return (
      <div className="fixed top-0 left-0 w-full h-full z-[-2] overflow-hidden pointer-events-none">
        <video
        id="heroVideo"
          src="/assets/videos/hero-background.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      );
}