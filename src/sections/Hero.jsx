import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const skills = [
  "HTML",
  "Css",
  "TailwindCss",
  "Javascript",
  "NodeJs",
  "React",
  "MongoDB",
  "Mongoose",
  "ExpressJs",
  "Python",
  "Docker",
  "Git",
  "GithubActions",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero-img"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content of Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column- Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Web Developer . Node Js Developer
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-seriff italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 ">
                Hi! My name is Arpan Shrestha. I am a passionate developer
                having experience in Frontend development & Backend development
                complemented by backend expertise.
              </p>
            </div>
            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behaviour: "smooth" });
                }}
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton
                onClick={() => {
                  window.open("/CV-ND.pdf");
                }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 ">
              <span className="text-sm text-muted-foreground">Follow:</span>
              {[
                { icon: FaGithub, href: "" },
                { icon: FaLinkedin, href: "" },
                { icon: FaFacebook, href: "" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column- Image Content */}
          <div className="relative max-w-md mx-auto">
            <div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 va-transparent
           to-primary/10 blur-2xl animate-pulse-glow"
            />
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img
                src="/myProfile_clean.png"
                alt="Arpan"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">
                    Available for Work
                  </span>
                </div>
              </div>
              {/* stats Badge */}
            </div>
          </div>
        </div>{" "}
        {/* Profile Image */}
        {/* Skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies i work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="cursor-default text-xl font-semihold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
