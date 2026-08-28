import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <article className="heard-slide">
        <header className="heard-bar">
          <span>Softtek x SpaceXAI</span>
          <span>Live review deck · draft</span>
        </header>
        <div className="heard-main">
          <h3>What this room covered</h3>
          <ol>
            {slides.map((slide) => (
              <li key={slide.n}>
                <p className="heard-tag">{slide.kicker}</p>
                <p className="heard-quote">
                  <strong>{slide.title}.</strong> {slide.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <footer className="heard-map">
          <p>Next step</p>
          <ul>
            <li>Name one high-toil workload.</li>
            <li>Capture the Softtek baseline.</li>
            <li>Keep FRIDA in place.</li>
          </ul>
        </footer>
      </article>
    </div>
  );
}
