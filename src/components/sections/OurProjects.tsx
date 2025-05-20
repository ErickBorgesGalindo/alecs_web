import { useState, useEffect, useRef } from "react";
import { Container } from "../shared/Container";
import { ProjectCard } from "../cards/ProjectCard";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { motion } from "framer-motion";
import softwareImage from "../../assets/images/p1.webp";

const projects = [
  {
    title: "Desarrollamos una aplicación para los cinéfilos.",
    image: softwareImage,
    link: "#",
  },
  {
    title: "Realizamos el sistema de administración para un centro psicológico.",
    image: softwareImage,
    link: "#",
  },
  {
    title: "Promocionamos una empresa de tours gastronómicos locales.",
    image: softwareImage,
    link: "#",
  },
  {
    title:
      "Posicionamos un centro de bienestar como referente en salud holística.",
    image: softwareImage,
    link: "#",
  },
];

export const OurProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section
      id="our-projects"
      ref={sectionRef}
      className="mt-20 md:mt-20 mb-15 text-heading-1"
    >
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
          <button className="bg-blue text-[#F3F3EA] font-semibold py-2 px-6 rounded-full hover:bg-green-400 transition">
            Ver más proyectos
          </button>
        </motion.div>
      </Container>
    </section>
  );
};