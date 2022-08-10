import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: "ease-in",
    });
  }, []);
  return (
    <section
      id="hero"
      className="flex flex-col items-center pt-20 mb-20 sm:items-start sm:pt-40 sm:max-w-5xl sm:mx-auto sm:mb-0 sm:h-screen"
    >
      <div className="flex flex-col font-bold">
        <p
          data-aos={"fade-up-right"}
          data-aos-delay="100"
          className="text-xl font-raleway"
        >
          Hi, my name is
        </p>
        <p
          data-aos={"fade-up-right"}
          data-aos-delay="150"
          className="text-5xl tracking-tight font-raleway sm:text-9xl"
        >
          Tyrail Leverett
        </p>
        <p
          data-aos={"fade-up-right"}
          data-aos-delay="200"
          className="pt-1 ml-5 text-2xl text-accent font-raleway sm:ml-10 sm:pt-5 sm:text-4xl"
        >
          Full-Stack Software Engineer
        </p>
      </div>
    </section>
  );
};

export default Hero;
