import { useState, useEffect, useRef } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { CardService } from "../cards/CardService";
import { FaLaptopCode, FaPencilRuler, FaFileCode, FaChartBar } from "react-icons/fa";
import { FaUserGear, FaMobileScreen } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Services = () => {
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
    <section id="services" className="py-20" ref={sectionRef}>
      <Container className="space-y-10">
        {/* Animación del título y párrafo */}
        <motion.div
          className="text-left max-w-3xl mx-10"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Activar animación si es visible
          transition={{ duration: 0.8 }}
        >
          <Title>¡ Crecemos Contigo !</Title>
          <Paragraph>
            Impulsamos tu marca con soluciones de desarrollo personalizadas, diseñadas para inspirar innovación, acelerar el crecimiento y maximizar tu impacto digital.
          </Paragraph>
        </motion.div>

        {/* Animación de las tarjetas */}
        <motion.div
          className="mx-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"} // Activar animación si es visible
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              Icon: FaLaptopCode,
              iconClassName: "text-heading-2",
              title: "Software Personalizado",
              description: "Creamos soluciones a medida que se ajustan a tus procesos y objetivos.",
            },
            {
              Icon: FaPencilRuler,
              iconClassName: "text-heading-3",
              title: "Diseño UX / UI",
              description: "Diseños funcionales y atractivos que mejoran la experiencia del usuario.",
            },
            {
              Icon: FaUserGear,
              iconClassName: "text-accent-orange",
              title: "Mantenimiento y Soporte",
              description: "Nos encargamos de que todo funcione. Mantenimiento, actualizaciones y soporte.",
            },
            {
              Icon: FaFileCode,
              iconClassName: "text-accent-green",
              title: "Desarrollo Web",
              description: "Sitios web modernos, rápidos y seguros. Tecnología actual y diseño responsive.",
            },
            {
              Icon: FaMobileScreen,
              iconClassName: "text-accent-pink",
              title: "Aplicaciones Móviles",
              description: "Rendimiento, experiencia y funcionalidad que conectan con tu audiencia.",
            },
            {
              Icon: FaChartBar,
              iconClassName: "text-heading-2",
              title: "Marketing",
              description: "Estrategias creativas para crecer. Enfocados en generar impacto real.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}} // Activar animación si es visible
              transition={{ duration: 0.8 }}
            >
              <CardService
                Icon={card.Icon}
                iconClassName={card.iconClassName}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};