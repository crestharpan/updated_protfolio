import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // fix it to the top left
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScroll ? "glass-strong py-3" : "glass py-5"} bg-transparent  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          AS<span className="text-primary">.</span>
        </a>
        {/* small Screen-> Hidden */}
        {/* medium screen->Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobMenuOpen((currentState) => !currentState)}
        >
          {isMobMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMobMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-5 flex flex-col gap-4">
            {navlinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground "
              >
                {link.label}
              </a>
            ))}

            <Button size="sm"> Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
