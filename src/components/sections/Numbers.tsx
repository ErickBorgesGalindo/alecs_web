import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { Container } from "../shared/Container";
import worldMapDots from "../../assets/images/world-map-dots.png";
import { Button } from "../shared/Button";

const avatarPositions = [
  "top-[20%] left-[30%]",
  "top-[45%] left-[60%]",
  "top-[70%] left-[25%]",
  "top-[60%] left-[80%]",
];

const avatarColors = [
  "bg-orange",
  "bg-green-500",
  "bg-blue-500",
  "bg-pink-500",
];

export const Numbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Activar cuando el 20% de la sección sea visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 text-heading-1">
      <Container className="flex flex-col lg:gap-12 lg:flex-row items-center justify-between gap-20">
        {/* Mapa con íconos */}
        <motion.div
          className="relative w-full lg:w-2/3 h-[400px] bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${worldMapDots})` }}
          initial={{ opacity: 0, x: -100 }} // Aparece desde la izquierda
          animate={isVisible ? { opacity: 1, x: 0 } : {}} // Llega a su posición final
          transition={{ duration: 0.8 }}
        >
          {avatarPositions.map((pos, index) => (
            <motion.div
              key={index}
              className={`absolute ${pos} w-12 h-12 rounded-full ${
                avatarColors[index % avatarColors.length]
              } flex items-center justify-center text-white shadow-lg`}
              initial={{ opacity: 0, x: -50 }} // Aparece desde la izquierda
              animate={isVisible ? { opacity: 1, x: 0 } : {}} // Llega a su posición final
              transition={{ duration: 0.8, delay: index * 0.2 }} // Retraso entre avatares
            >
              <FaUser size={20} />
            </motion.div>
          ))}
        </motion.div>

        {/* Texto y estadísticas */}
        <motion.div
          className="w-full lg:w-1/3 text-center lg:text-left"
          initial={{ opacity: 0, x: 100 }} // Aparece desde la derecha
          animate={isVisible ? { opacity: 1, x: 0 } : {}} // Llega a su posición final
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Trabajamos con clientes de todo el mundo
          </h2>
          <p className="text-heading-1 text-sm mb-6">
            Nuestra presencia global refleja nuestro compromiso inquebrantable
            con brindar servicios excepcionales y soluciones innovadoras, sin
            importar las fronteras geográficas.
          </p>
          <div className="flex justify-center lg:justify-start gap-10 mb-6">
            <div>
              <p className="text-5xl font-extrabold text-accent-orange">20</p>
              <p className="text-heading-1 text-lg font-semibold">Clientes internacionales</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold text-heading-2">40</p>
              <p className="text-heading-1 text-lg font-semibold">
                Proyectos internacionales
              </p>
            </div>
          </div>
          <Button className="w-1/2" bgColor="bg-pink" onClick={handleScrollToContact}>
            <span className="relative z-[5] text-white">
              Solicitar consulta
            </span>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
