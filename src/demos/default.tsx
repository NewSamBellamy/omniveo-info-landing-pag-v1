// src/demos/default.tsx
import { useEffect } from "react";
import { ParallaxComponent } from "@/components/ui/parallax-scrolling";

export default function ParallaxDemo() {
  useEffect(() => {
    // Lenis drives smoothing; the app's CSS `scroll-behavior: smooth`
    // conflicts with it, so disable it only while this demo is mounted.
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    return () => {
      html.style.scrollBehavior = previous;
    };
  }, []);

  return (
    <>
      <ParallaxComponent />
      <div className="osmo-credits">
        <p className="osmo-credits__p">Resource by <a target="_blank" rel="noreferrer" href="https://www.osmo.supply/" className="osmo-credits__p-a">Osmo</a>
        </p>
      </div>
    </>
  );
}
