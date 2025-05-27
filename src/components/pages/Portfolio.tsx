import Project from "../elements/Project";
import { Paragraph } from "../shared/Paragraph";
import projectImage from "../../assets/images/p1.webp";
import Movies from "../../assets/images/Mockup-Movies.png";
import PortfolioImage from "../../assets/images/Portfolio.png";

export const Portfolio = () => {
  return (
    <section  id="portfolio" className="relative pt-32 lg:pt-36">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5  gap-10 lg:gap-12">

        {/* Main */}
        <div className="flex flex-col lg:flex-row">
          {/* Degradado */}
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-[rgb(187,168,255)] to-[rgb(100,162,238)] blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
          </div>

          {/* Text */}
          <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
            <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
              Traemos tus ideas a la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(187,168,255)] to-[rgb(100,162,238)] ml-0">
                realidad
              </span>
            </h1>

            <Paragraph className="mt-8">
              Cuando trabajamos juntos, creamos algo extraordinario. Tus ideas
              se convierten en nuestra misión. Desde el primer boceto hasta el
              lanzamiento final, estamos contigo en cada paso del camino.
            </Paragraph>
          </div>

          {/* Image */}
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-2-non lg:mx-0 mx-auto max-w-3xl">
            {/* Cambiar esta imagen por un gif o animación de mi logo */}
            <img
              src={PortfolioImage}
              alt="Hero Image"
              width={2350}
              height={2359}
              className="lg:absolute lg:w-full lg:h-full object-contain lg:max-h-non max-h-screen"
            />
          </div>
        </div>

        {/* Proyectos */}
        <div className="pt-20">
          <Project
            title="Proyecto CineApp"
            description="Desarrollamos una plataforma para cinéfilos donde pueden descubrir, calificar y comentar películas."
            contributionTitle="¿En qué contribuimos?"
            contributions={[
              "Diseño de interfaz intuitiva",
              "Integración con API de películas",
              "Despliegue en la nube",
              "Optimización para móviles",
            ]}
            image= {Movies || projectImage}
            link="https://cineapp.com"
          />

          <Project
            title="Proyecto CineApp"
            description="Desarrollamos una plataforma para cinéfilos donde pueden descubrir, calificar y comentar películas."
            contributionTitle="¿En qué contribuimos?"
            contributions={[
              "Diseño de interfaz intuitiva",
              "Integración con API de películas",
              "Despliegue en la nube",
              "Optimización para móviles",
            ]}
            image= {projectImage}
          />

          <Project
            title="Proyecto CineApp"
            description="Desarrollamos una plataforma para cinéfilos donde pueden descubrir, calificar y comentar películas."
            contributionTitle="¿En qué contribuimos?"
            contributions={[
              "Diseño de interfaz intuitiva",
              "Integración con API de películas",
              "Despliegue en la nube",
              "Optimización para móviles",
            ]}
            image= {projectImage}
          />

          <Project
            title="Proyecto CineApp"
            description="Desarrollamos una plataforma para cinéfilos donde pueden descubrir, calificar y comentar películas."
            contributionTitle="¿En qué contribuimos?"
            contributions={[
              "Diseño de interfaz intuitiva",
              "Integración con API de películas",
              "Despliegue en la nube",
              "Optimización para móviles",
            ]}
            image= {projectImage}
            
          />
        </div>
      </div>
    </section>
  );
};
