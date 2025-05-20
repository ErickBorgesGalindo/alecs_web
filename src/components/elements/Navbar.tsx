import { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import logo from "../../assets/icon.svg";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const navItems = [
  { href: "hero", text: "Home" },
  { href: "services", text: "Services" },
  { href: "about-us", text: "About Us" },
  { href: "our-projects", text: "Projects" },
  { href: "contact", text: "Contact" },
  { href: "/blog", text: "Blog", isRoute: true },
  { href: "/portfolio", text: "Portfolio", isRoute: true },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (href: string, isRoute?: boolean) => {
    setIsMenuOpen(false); // Cerrar el menú al navegar
    if (isRoute) {
      navigate(href);
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Cambiar estado si el usuario ha hecho scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-4 transition-colors duration-300 ${
        isScrolled ? "bg-box-bg shadow-lg" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="w-full flex justify-between items-center relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="Alecs Studio Logo" className="w-10 h-10" />
              <div className="inline-flex text-lg cursor-pointer font-semibold text-heading-1">
                Alecs Studio
              </div>
            </a>
          </div>

          {/* Menú para pantallas grandes */}
          <ul className="hidden md:flex gap-x-10">
            {navItems.map((item, key) => (
              <li key={key}>
                <button
                  onClick={() => handleNavigation(item.href, item.isRoute)}
                  className="text-heading-1 duration-300 cursor-pointer font-medium ease-linear hover:text-primary py-3"
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>

          {/* Botón de menú para pantallas pequeñas */}
          <button
            className="md:hidden text-heading-1 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMenu />
          </button>

          {/* Menú desplegable */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-box-bg shadow-lg rounded-lg z-50">
              <ul className="flex flex-col gap-y-2 p-4">
                {navItems.map((item, key) => (
                  <li key={key}>
                    <button
                      onClick={() => handleNavigation(item.href, item.isRoute)}
                      className="text-heading-1 duration-300 cursor-pointer font-medium ease-linear hover:text-primary py-2 w-full text-left"
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};