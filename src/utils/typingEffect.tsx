// typingEffect.tsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect: React.FC = () => {
  const typedTarget = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "for your favorite jerseys here.",
        "Europe's top 5 leagues jerseys.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    if (typedTarget.current) {
      const typed = new Typed(typedTarget.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span ref={typedTarget} />;
};

export default TypingEffect;
