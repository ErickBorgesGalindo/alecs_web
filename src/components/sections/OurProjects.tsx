import { useState, useEffect, useRef } from "react";
import { Container } from "../shared/Container";
import { ProjectCard } from "../cards/ProjectCard";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { motion } from "framer-motion";
import { Button } from "../shared/Button";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Desarrollamos una aplicación para los cinéfilos.",
    image:
      "https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    title: "Realizamos el sistema de administración para Vienna.",
    image:
      "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    title: "Trabajamos con Crossfit Elite para llevarlo al siguiente nivel.",
    image:
      "https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
  {
    title:
      "Publicamos un artículo sobre inteligencia artificial en una revista internacional.",
    image:
      "https://images.pexels.com/photos/4238516/pexels-photo-4238516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "#",
  },
];

export const OurProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleGoToPortfolio = () => {
    navigate("/portfolio");
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
    <section id="our-projects" ref={sectionRef}>
      <Container className="space-y-8">
        {/* Animación del título */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Llega a su posición final
          transition={{ duration: 0.8 }}
        >
          <Title>Donde la creatividad se une con la innovación</Title>
        </motion.div>

        {/* Animación del subtítulo */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Llega a su posición final
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Paragraph>
            Proyectos que combinan ideas audaces, innovación y enfoque
            estratégico para ayudar a nuestros clientes a destacar.
          </Paragraph>
        </motion.div>

        {/* Animación de las tarjetas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-20"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"} // Activar animación si es visible
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Retraso entre las animaciones de las tarjetas
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Llega a su posición final
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Botón */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 50 }} // Aparece desde abajo
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Llega a su posición final
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            className="w-1/4"
            bgColor="bg-orange"
            onClick={handleGoToPortfolio}
          >
            <span className="relative z-[5] text-white">Ver más proyectos</span>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};
