import React, { useEffect } from "react";
import { useEmblaCarousel } from "embla-carousel/react";

const Carousel = () => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (embla) {
      // Embla API is ready
    }
  }, [embla]);

  return (
    <EmblaCarouselReact className="embla__viewport">
      <div className="embla__slide" style={{ display: "flex" }}>
        <div style={{ minWidth: "100%" }}>
          <div>Slide 1</div>
        </div>
        <div style={{ minWidth: "100%" }}>Slide 2</div>
        <div style={{ minWidth: "100%" }}>Slide 3</div>
      </div>
    </EmblaCarouselReact>
  );
};

export default Carousel;
