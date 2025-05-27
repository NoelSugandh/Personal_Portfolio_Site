import { ButtonPrimary, ButtonOutline } from "./Button";
import Resume from "../assets/Resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div
        className="container items-center lg:grid lg:grid-cols-2
            lg:gap-10"
      >
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="../images/image.jpg"
                alt="Noel Sugandh Portrait"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>
            <div
              className="flex items-center gap-1.5 text-zinc-400
                        text-sm tracking-wide"
            >
              <span
                className="relative w-2 h-2 
                            rounded-full bg-emerald-400"
              >
                <span
                  className="absolute inset-0 
                            rounded-full bg-emerald-400 animate-ping"
                ></span>
              </span>
              Available for work
            </div>
          </div>
          <h2
            className="headline-1 max-w-[15ch] sm:max-w-[20ch]
                    lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
          >
            Hi, I'm Noel Sugandh M, &emsp; React Developer.
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href={Resume}
              label="Download CV"
              icon={<img src="../images/download.svg" />}
              target="_blank"
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon={<img src="../images/down.png" />}
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[350px] ml:auto
                     rounded-[30px] overflow-hidden"
          >
            <img
              src="../images/image.jpg"
              width={656}
              height={800}
              alt="Noel Sugandh Portrait"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
