import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";
import { FaRegCircleCheck, FaRegLightbulb } from "react-icons/fa6";

export const AboutUs = () => {
  return (
    <section id="about-us" className="py-20">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg/"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Us"
            />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col">
          <Title>Sobre nosotros</Title>
          <Paragraph className="text-sm">
            En Alecs Studio combinamos creatividad, tecnología y estrategia para
            construir soluciones digitales con propósito. Creemos en lo simple,
            lo funcional y lo bien hecho. Acompañamos a nuestros clientes desde
            la idea hasta el lanzamiento, con cercanía, compromiso y visión a
            futuro.
          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Misión"
              description="Crear soluciones digitales funcionales, creativas y centradas en el usuario."
            >
              <FaRegCircleCheck className="w-6 h-6 sm:w-6 sm:h-6 text-accent-orange" />
            </Info>

            <Info
              title="Visión"
              description="Ser referentes en innovación digital con impacto real y sostenible."
            >
              <FaRegLightbulb className="w-6 h-6 sm:w-6 sm:h-6 text-accent-pink" />
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
